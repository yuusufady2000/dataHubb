import { useState } from "react";
import { FaUniversity } from "react-icons/fa";

const PaymentToggle = () => {
  const [active, setActive] = useState("palmpay");

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6 text-center">
        Select Payment Method
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-5">
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
          className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold border transition-all duration-300 ${
            active === "monie"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-green-600 border-green-600 hover:bg-green-50"
          }`}
        >
          Moniepoint
        </button>
      </div>

      <div className="w-full max-w-md sm:max-w-2xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 space-y-6 border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <FaUniversity size={28} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {active === "palmpay"
              ? "Palmpay Account Details"
              : "Moniepoint Account Details"}
          </h2>
        </div>

        <div className="text-gray-700 text-sm sm:text-lg space-y-2">
          <p className="font-medium flex justify-between">
            <span>Account Number:</span>
            <span className="font-semibold text-gray-900">639834556</span>
          </p>
          <p className="font-medium flex justify-between">
            <span>Account Name:</span>
            <span className="font-semibold text-gray-900">Balogun Yusuf</span>
          </p>
          <p className="font-medium flex justify-between">
            <span>Charges Cap:</span>
            <span className="font-semibold text-green-600">0%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentToggle;
