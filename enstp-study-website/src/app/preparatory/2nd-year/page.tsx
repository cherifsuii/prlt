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

const SecondYearPage = () => {
  const [semester1Data, setSemester1Data] = useState<ResourceFile[]>([]);
  const [semester2Data, setSemester2Data] = useState<ResourceFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ResourceFile[]) => {
        const secondYearData = data.filter(
          (item) =>
            item.metadata.cycle === 'Preparatory' &&
            item.metadata.year === '2nd Year'
        );

        setSemester1Data(
          secondYearData.filter((item) => item.metadata.semester === 'Semester 1')
        );
        setSemester2Data(
          secondYearData.filter((item) => item.metadata.semester === 'Semester 2')
        );

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading resources...</div>;
  }

  const renderSubjects = (data: ResourceFile[]) => {
    return data.map((file) =>
      file.subjects.map((subject) => {
        const isBerroudji = subject.name.toLowerCase().includes('berroudji');
        return (
          <div key={subject.name} className={`mb-8 p-6 bg-white rounded-lg border ${isBerroudji ? 'border-orange-500' : 'border-gray-200'} shadow-sm`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              {subject.name}
              {isBerroudji && <span className="text-sm font-normal text-orange-500 ml-2">(Mr. Berroudji)</span>}
            </h3>
            {subject.categories?.map((category) => (
              <div key={category.name} className="mb-4">
                <h4 className="text-xl font-semibold text-gray-700">{category.name}</h4>
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
          </div>
        )
      })
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">
        Preparatory Cycle - 2nd Year
      </h1>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Semester 1</h2>
        {renderSubjects(semester1Data)}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Semester 2</h2>
        {renderSubjects(semester2Data)}
      </section>
    </div>
  );
};

export default SecondYearPage;
