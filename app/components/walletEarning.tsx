const WalletEarning = () => {
  return (
    <div className="bg-white w-full max-w-5xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 text-center">
      <div className="flex flex-col items-center w-full sm:w-1/3">
        <p className="text-gray-500 font-medium text-sm sm:text-base">
          Wallet Balance
        </p>
        <span className="text-2xl sm:text-3xl font-bold text-green-600">
          ₦20,000
        </span>
      </div>

      <div className="flex flex-col items-center w-full sm:w-1/3">
        <p className="text-gray-500 font-medium text-sm sm:text-base">
          Earning Balance
        </p>
        <span className="text-2xl sm:text-3xl font-bold text-blue-600">
          ₦000
        </span>
      </div>

      <div className="flex flex-col items-center w-full sm:w-1/3">
        <p className="text-gray-500 font-medium text-sm sm:text-base">
          Data Purchased
        </p>
        <span className="text-2xl sm:text-3xl font-bold text-yellow-500">
          2.0GB
        </span>
      </div>
    </div>
  );
};

export default WalletEarning;
