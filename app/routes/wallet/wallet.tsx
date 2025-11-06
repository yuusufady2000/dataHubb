
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import AsidePage from "../aside/aside";

const Wallet = () => {
  const [active, setActive] = useState("palmpay");

  return (
    <div className="flex min-h-screen  ">
       <div className="md:w-64 w-full md:block hidden">
        <AsidePage />
      </div>
 <div className=" flex flex-col -mt-[13rem] justify-center items-center  p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Select Payment Method</h1>

    
      <div className="flex gap-4 mb-3">
        <button
          onClick={() => setActive("palmpay")}
          className={`px-10 py-3 rounded-lg font-semibold border transition-all duration-300 ${
            active === "palmpay"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
          }`}
        >
          PalmPay
        </button>

        <button
          onClick={() => setActive("monie")}
          className={`px-6 py-3 rounded-lg font-semibold border transition-all duration-300 ${
            active === "monie"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-green-600 border-green-600 hover:bg-green-50"
          }`}
        >
          Moniepoint
        </button>
      </div>

    
      {active === "palmpay" && (
         <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-3xl mx-auto flex flex-col items-start space-y-6 border border-gray-200">
  <div className="flex items-center space-x-4">
    <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
      <FaUniversity size={32} />
    </div>
    <h2 className="text-2xl font-bold text-gray-800">
      Palmpay Account Details
    </h2>
  </div>

  <div className="text-gray-700 text-lg space-y-2">
    <p className="font-medium">
      Account Number: <span className="font-semibold text-gray-900">639834556</span>
    </p>
    <p className="font-medium">
      Account Name: <span className="font-semibold text-gray-900">Balogun Yusuf</span>
    </p>
    <p className="font-medium">
      Charges Cap: <span className="font-semibold text-green-600">0%</span>
    </p>
  </div>
</div>

      )}

      
      {active === "monie" && (
        <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-3xl mx-auto flex flex-col items-start space-y-6 border border-gray-200">
  <div className="flex items-center space-x-4">
    <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
      <FaUniversity size={32} />
    </div>
    <h2 className="text-2xl font-bold text-gray-800">
      Moniepoint Account Details
    </h2>
  </div>

  <div className="text-gray-700 text-lg space-y-2">
    <p className="font-medium">
      Account Number: <span className="font-semibold text-gray-900">639834556</span>
    </p>
    <p className="font-medium">
      Account Name: <span className="font-semibold text-gray-900">Balogun Yusuf</span>
    </p>
    <p className="font-medium">
      Charges Cap: <span className="font-semibold text-green-600">0%</span>
    </p>
  </div>
</div>

      )}
    </div>
    </div>
   
  );
};

export default Wallet;
