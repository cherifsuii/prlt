import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-96 rounded-lg"
        style={{ backgroundImage: "url('/banner-placeholder.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            ENSTP Study
          </h1>
          <div className="w-full max-w-2xl px-4">
            <input
              type="text"
              placeholder="Search for courses, TDs, exams..."
              className="w-full p-4 rounded-full text-lg"
            />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/preparatory" className="block p-8 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
            <h2 className="text-3xl font-bold mb-2">Preparatory Cycle</h2>
            <p>Resources for the 1st and 2nd year of the preparatory cycle.</p>
          </Link>
          <Link href="/engineering" className="block p-8 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
            <h2 className="text-3xl font-bold mb-2">Engineering Cycle</h2>
            <p>Resources for DIB and DMS departments.</p>
          </Link>
          <Link href="/resources" className="block p-8 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
            <h2 className="text-3xl font-bold mb-2">Resources & Competitions</h2>
            <p>Extra resources, competition prep, and more.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
