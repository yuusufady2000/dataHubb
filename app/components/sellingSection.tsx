import { Link } from "react-router";
import { FaWifi, FaPhoneAlt, FaBolt, FaTv, FaFileAlt, FaPrint } from "react-icons/fa";

const SellingSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center lg:">
      
      <Link
        to="./dataPage"
        className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 transition p-8 rounded-xl shadow-md"
      >
        <FaWifi className="text-blue-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">Buy Data</h2>
      </Link>

      <Link
        to="./airtimePage"
        className="flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 transition p-8 rounded-xl shadow-md"
      >
        <FaPhoneAlt className="text-green-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">Buy Airtime</h2>
      </Link>

      <Link
        to="./nepabill"
        className="flex flex-col items-center justify-center bg-yellow-50 hover:bg-yellow-100 transition p-8 rounded-xl shadow-md"
      >
        <FaBolt className="text-yellow-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">Electricity Bill</h2>
      </Link>

      <Link
        to="./tvsub"
        className="flex flex-col items-center justify-center bg-purple-50 hover:bg-purple-100 transition p-8 rounded-xl shadow-md"
      >
        <FaTv className="text-purple-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">TV Subscription</h2>
      </Link>

      <Link
        to="./resultChecker"
        className="flex flex-col items-center justify-center bg-pink-50 hover:bg-pink-100 transition p-8 rounded-xl shadow-md"
      >
        <FaFileAlt className="text-pink-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">Result Checker</h2>
      </Link>

      <Link
        to="./rechargeCard"
        className="flex flex-col items-center justify-center bg-red-50 hover:bg-red-100 transition p-8 rounded-xl shadow-md"
      >
        <FaPrint className="text-red-600 text-4xl mb-3" />
        <h2 className="text-lg font-semibold text-gray-800">Recharge Card Printing</h2>
      </Link>
    </div>
  );
};

export default SellingSection;
