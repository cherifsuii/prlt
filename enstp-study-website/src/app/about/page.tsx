'use client';

import { useEffect, useState } from 'react';

// Reusing the same types. It would be better to have these in a shared file.
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

const AboutPage = () => {
  const [aboutData, setAboutData] = useState<ResourceFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ResourceFile[]) => {
        setAboutData(
          data.filter((item) => item.metadata.cycle === 'About')
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div dir="rtl" className="text-right">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">
        حول المدرسة الوطنية العليا للأشغال العمومية
      </h1>

      <div className="space-y-8">
        {aboutData.map((file) =>
          file.subjects.map((subject, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {subject.name}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default AboutPage;
