'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define types
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

interface SearchResult {
    metadata: ResourceFile['metadata'];
    subject: string;
    category?: string;
    link?: LinkData;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetch('/data.json')
        .then((res) => res.json())
        .then((data: ResourceFile[]) => {
          const lowerCaseQuery = query.toLowerCase();
          const searchResults: SearchResult[] = [];

          data.forEach((file) => {
            file.subjects.forEach((subject) => {
              if (subject.name.toLowerCase().includes(lowerCaseQuery)) {
                searchResults.push({
                    metadata: file.metadata,
                    subject: subject.name,
                });
              }

              subject.categories.forEach((category) => {
                if (category.name.toLowerCase().includes(lowerCaseQuery)) {
                    searchResults.push({
                        metadata: file.metadata,
                        subject: subject.name,
                        category: category.name,
                    });
                }
                category.links.forEach((link) => {
                  if (link.description.toLowerCase().includes(lowerCaseQuery)) {
                    searchResults.push({
                        metadata: file.metadata,
                        subject: subject.name,
                        category: category.name,
                        link: link,
                    });
                  }
                });
              });
            });
          });
          setResults(searchResults);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  const getBreadcrumbPath = (metadata: ResourceFile['metadata']) => {
      let path = '';
      if (metadata.cycle === 'Preparatory') path = '/preparatory';
      if (metadata.cycle === 'Engineering') path = '/engineering';
      if (metadata.year === '1st Year') path += '/1st-year';
      if (metadata.year === '2nd Year') path += '/2nd-year';
      if (metadata.department === 'DIB') path = '/engineering/dib';
      if (metadata.department === 'DMS') path = '/engineering/dms';
      return path;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Search Results for "{query}"
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">
                    <Link href={getBreadcrumbPath(result.metadata)} className="hover:underline">
                        {result.metadata.cycle}
                        {result.metadata.department !== 'General' && ` / ${result.metadata.department}`}
                        {result.metadata.year !== 'Unknown' && ` / ${result.metadata.year}`}
                        {result.metadata.semester !== 'Unknown' && ` / ${result.metadata.semester}`}
                    </Link>
                </div>
              <h2 className="text-xl font-bold text-gray-800">{result.subject}</h2>
              {result.category && <p className="text-gray-600 ml-4">{result.category}</p>}
              {result.link && (
                 <a href={result.link.urls[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-orange-500 hover:underline ml-8 block">
                    {result.link.description}
                 </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
