import Link from 'next/link';

const EngineeringPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Engineering Cycle</h1>
      <div className="mb-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Choose Your Department</h2>
        <p className="text-gray-700">
          At ENSTP, the engineering cycle is divided into two main departments. Please select your department to find the relevant academic resources.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/engineering/dib" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-2 text-blue-500">DIB - Basic Infrastructures</h2>
          <p className="text-gray-600">Department of Basic Infrastructures.</p>
        </Link>
        <Link href="/engineering/dms" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-2 text-blue-500">DMS - Materials & Structures</h2>
          <p className="text-gray-600">Department of Materials and Structures.</p>
        </Link>
      </div>
    </div>
  );
};

export default EngineeringPage;
