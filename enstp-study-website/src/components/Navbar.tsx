import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              ENSTP Study
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/preparatory" className="text-gray-600 hover:text-orange-500">
              Preparatory Cycle
            </Link>
            <Link href="/engineering" className="text-gray-600 hover:text-orange-500">
              Engineering Cycle
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-orange-500">
              Resources & Competitions
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-500">
              About
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-600 hover:text-orange-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
