import AsidePage from "../aside/aside";

const Pin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
     <div className="md:w-64 w-full md:block hidden">
        <AsidePage />
      </div>

      <div className="flex flex-1 items-center justify-center -mt-[10rem]">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-[22rem] space-y-5">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Change Your PIN
          </h2>

          <form className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="newPin"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                New PIN
              </label>
              <input
                type="password"
                id="newPin"
                placeholder="Enter your new PIN"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="newPinAgain"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Re-enter PIN
              </label>
              <input
                type="password"
                id="newPinAgain"
                placeholder="Re-enter your PIN"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Change PIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pin;
