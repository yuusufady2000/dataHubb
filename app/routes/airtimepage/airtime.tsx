import AsidePage from "../aside/aside";

const AirtimePage = () => {
  return (
    
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <div className="md:w-64 w-full md:block hidden">
                <AsidePage />
          </div>
           <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <form className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 space-y-5">
          <h1 className="text-center text-3xl font-bold text-green-600 mb-6">
            Buy Airtime
          </h1>

          <select
            name="network"
            id="data_network"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Network</option>
            <option value="mtn">MTN</option>
            <option value="airtel">Airtel</option>
            <option value="glo">Glo</option>
            <option value="9mobile">9Mobile</option>
          </select>

        
          <select
            name="plan-select"
            id="plan-select"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Plan</option>
            <option value="vtu">VTU</option>
           
          </select>

          <label htmlFor="phonenumber" className="block font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

          <div>
            <label htmlFor="amount" className="block font-semibold text-gray-700 mb-1">
             Enter amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="pin" className="block font-semibold text-gray-700 mb-1">
              Transaction PIN
            </label>
            <input
              type="password"
              name="pin"
              id="pin"
              placeholder="Enter your 4-digit PIN"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <button className="bg-green-500 w-full p-3 rounded-lg text-white font-semibold hover:bg-green-600 transition">
            Purchase
          </button>
        </form>
     </div>
     </div>
   
  );
};

export default AirtimePage;
