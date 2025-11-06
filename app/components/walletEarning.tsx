const WalletEarning = () => {
  return (
    <div className="bg-white w-full max-w-5xl mx-auto p-10 rounded-2xl shadow-lg flex justify-around items-center text-center">
      <div className="flex flex-col">
        <p className="text-gray-500 font-medium">Wallet Balance</p>
        <span className="text-3xl font-bold text-green-600">₦20,000</span>
      </div>

      <div className="flex flex-col">
        <p className="text-gray-500 font-medium">Earning Balance</p>
        <span className="text-3xl font-bold text-blue-600">₦000</span>
      </div>

      <div className="flex flex-col">
        <p className="text-gray-500 font-medium">Data Purchased</p>
        <span className="text-3xl font-bold text-yellow-500">2.0GB</span>
      </div>
    </div>
  );
};

export default WalletEarning;
