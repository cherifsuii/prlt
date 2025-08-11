import Link from 'next/link';

const PreparatoryPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Preparatory Cycle</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/preparatory/1st-year" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-2 text-orange-500">1st Year</h2>
          <p className="text-gray-600">Resources for the first year of the preparatory cycle.</p>
        </Link>
        <Link href="/preparatory/2nd-year" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-2 text-orange-500">2nd Year</h2>
          <p className="text-gray-600">Resources for the second year of the preparatory cycle.</p>
        </Link>
      </div>
    </div>
  );
};

export default PreparatoryPage;
