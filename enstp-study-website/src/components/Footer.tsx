import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              Developed by Cherif Tas.
            </p>
            <p className="text-sm text-gray-500">
              "I want them to pray for me as well if you care about this."
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/in/cherif-tas-7504b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              LinkedIn
            </Link>
            <Link href="https://t.me/Tascherif" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
              Report an issue (Telegram)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
