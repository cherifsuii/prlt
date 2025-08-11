'use client';

import { useEffect, useState } from 'react';

// Define a type for our resource data for better type-checking
interface LinkData {
  urls: string[];
  description: string;
}

interface Category {
  name: string;
  links: LinkData[];
}

interface Subject {
  name: string;
  categories: Category[];
  links: LinkData[];
}

interface ResourceFile {
  metadata: {
    cycle: string;
    year: string;
    semester: string;
    department: string;
    originalFile: string;
  };
  subjects: Subject[];
}

const DIBPage = () => {
  const [firstYearData, setFirstYearData] = useState<ResourceFile[]>([]);
  const [secondYearData, setSecondYearData] = useState<ResourceFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ResourceFile[]) => {
        const dibData = data.filter(
          (item) =>
            item.metadata.cycle === 'Engineering' &&
            item.metadata.department === 'DIB'
        );

        setFirstYearData(
          dibData.filter((item) => item.metadata.year === '1st Year')
        );
        setSecondYearData(
          dibData.filter((item) => item.metadata.year === '2nd Year')
        );

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading resources...</div>;
  }

  const renderSubjects = (data: ResourceFile[], year: string) => {
    const semester1Data = data.filter(item => item.metadata.semester === 'Semester 1');
    const semester2Data = data.filter(item => item.metadata.semester === 'Semester 2');

    const renderSemester = (semesterData: ResourceFile[], semesterName: string) => {
      return (
        <section className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">{semesterName}</h3>
          {semesterData.map((file) =>
            file.subjects.map((subject) => {
              const isComingSoon = subject.name.toLowerCase().includes('coming soon') || (subject.categories.length === 0 && subject.links.length === 0);
              if (isComingSoon) {
                return (
                  <div key={subject.name} className="mb-8 p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-500">{subject.name} - Coming Soon</h4>
                  </div>
                )
              }
              return (
                <div key={subject.name} className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{subject.name}</h4>
                  {subject.categories?.map((category) => (
                    <div key={category.name} className="mb-4 mt-2">
                      <h5 className="text-lg font-semibold text-gray-700">{category.name}</h5>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        {category.links?.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link.urls[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-orange-500 hover:underline"
                            >
                              {link.description || `Link ${index + 1}`}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            })
          )}
        </section>
      )
    }

    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">{year}</h2>
        {renderSemester(semester1Data, 'Semester 1')}
        {renderSemester(semester2Data, 'Semester 2')}
      </div>
    )
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">
        Engineering Cycle - DIB Department
      </h1>

      {renderSubjects(firstYearData, '1st Year')}
      {renderSubjects(secondYearData, '2nd Year')}
    </div>
  );
};

export default DIBPage;
