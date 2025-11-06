import AsidePage from "../aside/aside";

const PricingPage = () => {
  const pricingData = {
    mtn: [
      { plan: "1GB", price: "₦600" },
      { plan: "2GB", price: "₦1200" },
      { plan: "3GB", price: "₦1800" },
      { plan: "5GB", price: "₦3000" },
    ],
    airtel: [
      { plan: "1GB", price: "₦600" },
      { plan: "2GB", price: "₦1200" },
      { plan: "3GB", price: "₦1800" },
      { plan: "5GB", price: "₦3000" },
    ],
    glo: [
      { plan: "1GB", price: "₦600" },
      { plan: "2GB", price: "₦1200" },
      { plan: "3GB", price: "₦1800" },
      { plan: "5GB", price: "₦3000" },
    ],
    ninemobile: [
      { plan: "1GB", price: "₦600" },
      { plan: "2GB", price: "₦1200" },
      { plan: "3GB", price: "₦1800" },
      { plan: "5GB", price: "₦3000" },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:w-64 w-full md:block hidden">
        <AsidePage />
      </div>

      <div className="flex-1 px-4 sm:px-6 md:px-10 py-8">
        <h2 className="text-2xl sm:text-3xl text-center text-gray-700 font-bold mb-8">
          Data Pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          <div className="bg-yellow-400 rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto">
            <h3 className="text-center text-lg font-semibold mb-3 text-gray-800">
              MTN Data Plans
            </h3>
            <table className="w-full text-center border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-yellow-500 text-white">
                  <th className="p-2">Plan</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.mtn.map((item, index) => (
                  <tr key={index} className="border-b border-yellow-200">
                    <td className="p-2">{item.plan}</td>
                    <td className="p-2 font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-red-500 rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto">
            <h3 className="text-center text-lg font-semibold mb-3 text-white">
              Airtel Data Plans
            </h3>
            <table className="w-full text-center border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="p-2">Plan</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.airtel.map((item, index) => (
                  <tr key={index} className="border-b border-red-300 text-white">
                    <td className="p-2">{item.plan}</td>
                    <td className="p-2 font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-500 rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto">
            <h3 className="text-center text-lg font-semibold mb-3 text-white">
              Glo Data Plans
            </h3>
            <table className="w-full text-center border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-2">Plan</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.glo.map((item, index) => (
                  <tr key={index} className="border-b border-green-300 text-white">
                    <td className="p-2">{item.plan}</td>
                    <td className="p-2 font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-500 rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto">
            <h3 className="text-center text-lg font-semibold mb-3 text-white">
              9Mobile Data Plans
            </h3>
            <table className="w-full text-center border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-2">Plan</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.ninemobile.map((item, index) => (
                  <tr key={index} className="border-b border-blue-300 text-white">
                    <td className="p-2">{item.plan}</td>
                    <td className="p-2 font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
