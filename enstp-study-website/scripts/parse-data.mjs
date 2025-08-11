import fs from 'fs/promises';
import path from 'path';

const dataDir = path.resolve(process.cwd(), 'enstp-study-website/data');
const outputFilePath = path.resolve(process.cwd(), 'enstp-study-website/public/data.json');

function getMetadataFromFilename(filename) {
    const metadata = {
        cycle: 'Unknown',
        year: 'Unknown',
        semester: 'Unknown',
        department: 'General',
        originalFile: filename,
    };

    const lowerFilename = filename.toLowerCase();

    if (lowerFilename.includes('preparatoire')) {
        metadata.cycle = 'Preparatory';
    } else if (lowerFilename.includes('dib') || lowerFilename.includes('dms')) {
        metadata.cycle = 'Engineering';
    } else if (lowerFilename.includes('coucours') || lowerFilename.includes('formations') || lowerFilename.includes('ultimate_packs')) {
        metadata.cycle = 'Resources';
    } else if (lowerFilename.includes('info')) {
        metadata.cycle = 'About';
    }


    if (lowerFilename.includes('1er_anne') || lowerFilename.includes('1ere_anne') || lowerFilename.includes('1_ere_anne')) {
        metadata.year = '1st Year';
    } else if (lowerFilename.includes('2_eme_anne')) {
        metadata.year = '2nd Year';
    } else if (lowerFilename.includes('3_eme_anne')) {
        metadata.year = '3rd Year';
    }

    if (lowerFilename.includes('semestre_1')) {
        metadata.semester = 'Semester 1';
    } else if (lowerFilename.includes('semestre_2')) {
        metadata.semester = 'Semester 2';
    }

    if (lowerFilename.includes('dib')) {
        metadata.department = 'DIB';
    } else if (lowerFilename.includes('dms')) {
        metadata.department = 'DMS';
    }

    return metadata;
}

async function parseFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);

    const subjects = [];
    let currentSubject = null;
    let currentCategory = null;

    const categoryKeywords = ['cours', 'td', 'exo', 'exam', 'intiro', 'resume', 'pack', 'tp', 'livre', 'book', 'solution', 'chapitre', 'chap', 'exercices', 'examens', 'intirogations', 'ultimate', 'les cours', 'devoir', 'interro'];

    for (const line of lines) {
        const urls = line.match(/https?:\/\/\S+/g) || [];

        if (urls.length > 0) {
            const description = line.replace(/https?:\/\/\S+/g, '').trim();
            const linkData = {
                urls,
                description: description || 'Link'
            };

            if (currentCategory) {
                if(!currentCategory.links) currentCategory.links = [];
                currentCategory.links.push(linkData);
            } else if (currentSubject) {
                 if(!currentSubject.links) currentSubject.links = [];
                 currentSubject.links.push(linkData);
            }
        } else {
            const lowerLine = line.toLowerCase();
            const isCategory = categoryKeywords.some(kw => lowerLine.includes(kw));

            if (isCategory) {
                currentCategory = { name: line, links: [] };
                if (currentSubject) {
                    if (!currentSubject.categories) currentSubject.categories = [];
                    currentSubject.categories.push(currentCategory);
                } else {
                    // if a category appears before a subject, treat it as a subject
                    currentSubject = { name: line, categories: [], links: [] };
                    subjects.push(currentSubject);
                    currentCategory = null;
                }
            } else {
                currentSubject = { name: line, categories: [], links: [] };
                subjects.push(currentSubject);
                currentCategory = null;
            }
        }
    }

    return subjects;
}

async function main() {
    const allData = [];
    try {
        const files = await fs.readdir(dataDir);

        for (const file of files) {
            if (path.extname(file) === '.txt') {
                const filePath = path.join(dataDir, file);
                const parsedData = await parseFile(filePath);
                const metadata = getMetadataFromFilename(file);

                if (parsedData.length > 0) {
                    const fileData = {
                        metadata,
                        subjects: parsedData,
                    };
                    allData.push(fileData);
                }
            }
        }

        await fs.writeFile(outputFilePath, JSON.stringify(allData, null, 2));
        console.log(`Data parsed and saved to ${outputFilePath}`);
    } catch (error) {
        console.error('Error during parsing:', error);
    }
}

main();
