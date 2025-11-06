import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import AsidePage from "../aside/aside";

const Wallet = () => {
  const [active, setActive] = useState("palmpay");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="md:w-64 w-full hidden md:block">
        <AsidePage />
      </div>

      <div className="flex flex-col flex-1 justify-center items-center px-4 py-10 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          Select Payment Method
        </h1>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6">
          <button
            onClick={() => setActive("palmpay")}
            className={`px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg font-semibold border transition-all duration-300 ${
              active === "palmpay"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
          >
            PalmPay
          </button>

          <button
            onClick={() => setActive("monie")}
            className={`px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg font-semibold border transition-all duration-300 ${
              active === "monie"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600 hover:bg-green-50"
            }`}
          >
            Moniepoint
          </button>
        </div>

        {active === "palmpay" && (
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto flex flex-col items-start space-y-6 border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-600 p-3 sm:p-4 rounded-full">
                <FaUniversity size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Palmpay Account Details
              </h2>
            </div>

            <div className="text-gray-700 text-base sm:text-lg space-y-2">
              <p className="font-medium">
                Account Number:{" "}
                <span className="font-semibold text-gray-900">639834556</span>
              </p>
              <p className="font-medium">
                Account Name:{" "}
                <span className="font-semibold text-gray-900">
                  Balogun Yusuf
                </span>
              </p>
              <p className="font-medium">
                Charges Cap:{" "}
                <span className="font-semibold text-green-600">0%</span>
              </p>
            </div>
          </div>
        )}

        {active === "monie" && (
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto flex flex-col items-start space-y-6 border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-600 p-3 sm:p-4 rounded-full">
                <FaUniversity size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Moniepoint Account Details
              </h2>
            </div>

            <div className="text-gray-700 text-base sm:text-lg space-y-2">
              <p className="font-medium">
                Account Number:{" "}
                <span className="font-semibold text-gray-900">639834556</span>
              </p>
              <p className="font-medium">
                Account Name:{" "}
                <span className="font-semibold text-gray-900">
                  Balogun Yusuf
                </span>
              </p>
              <p className="font-medium">
                Charges Cap:{" "}
                <span className="font-semibold text-green-600">0%</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
