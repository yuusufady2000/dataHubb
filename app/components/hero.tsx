import { IoAdd } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-blue-600 w-full max-w-[80rem] mx-auto mt-10 text-white rounded-xl shadow-md px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
          Welcome back, <span className="text-yellow-300">Adam</span> 👋
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mt-1">
          Manage your data, airtime, and wallet all in one place.
        </p>
      </div>
      <nav className="w-full sm:w-auto">
        <a
          href="./wallet"
          className="flex items-center justify-center sm:justify-start gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 sm:px-3 py-2 rounded-lg shadow-md transition w-full sm:w-auto"
        >
          <IoAdd className="text-lg sm:text-xl " />
          Fund Wallet
        </a>
      </nav>
    </div>
  );
};

export default Hero;
