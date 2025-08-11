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

const ResourcesPage = () => {
  const [competitionData, setCompetitionData] = useState<ResourceFile[]>([]);
  const [formationsData, setFormationsData] = useState<ResourceFile[]>([]);
  const [libraryData, setLibraryData] = useState<ResourceFile[]>([]);
  const [otherSchoolsData, setOtherSchoolsData] = useState<ResourceFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ResourceFile[]) => {
        const resourcesData = data.filter(
          (item) => item.metadata.cycle === 'Resources' || item.metadata.originalFile.includes('coucours') || item.metadata.originalFile.includes('FORMATIONS') || item.metadata.originalFile.includes('ULTIMATE_PACKS')
        );

        setCompetitionData(
          resourcesData.filter((item) => item.metadata.originalFile.includes('coucours'))
        );
        setFormationsData(
          resourcesData.filter((item) => item.metadata.originalFile.includes('FORMATIONS'))
        );
        setLibraryData(
          resourcesData.filter((item) => item.metadata.originalFile.includes('9anon') || item.metadata.originalFile.includes('mostalahat'))
        );
        setOtherSchoolsData(
          resourcesData.filter((item) => item.metadata.originalFile.includes('ULTIMATE_PACKS'))
        );

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading resources...</div>;
  }

  const renderResources = (data: ResourceFile[], title: string) => {
    if (data.length === 0) return null;

    return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">{title}</h2>
        {data.map((file) =>
          file.subjects.map((subject) => (
            <div key={subject.name} className="mb-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700">{subject.name}</h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                {subject.links?.map((link, index) => (
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
                {subject.categories?.map(cat => cat.links?.map((link, index) => (
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
                )))}
              </ul>
            </div>
          ))
        )}
      </section>
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">
        Resources & Competitions
      </h1>

      {renderResources(competitionData, 'Competition Preparation')}
      {renderResources(formationsData, 'Advanced Formations')}
      {renderResources(libraryData, 'Technical & Legal Library')}
      {renderResources(otherSchoolsData, 'Resources from Other Schools')}
    </div>
  );
};

export default ResourcesPage;
