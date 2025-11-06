import type { Route } from "./+types/data";
import AsidePage from "../aside/aside";


export async function loader({ request }: Route.LoaderArgs): Promise<any> {
  const res = await fetch("http://localhost:7000/dataPlan");
  const data = await res.json();
  return { dataPlan: data };
}

const DataPage = ({ loaderData }: Route.ComponentProps) => {
  const { dataPlan } = loaderData;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="md:w-64 w-full md:block hidden">
        <AsidePage />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 space-y-5">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-green-600 mb-4">
            Buy Data
          </h1>

          <form className="space-y-4">
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
              <option value="">Select Data Type</option>
              <option value="sme">SME</option>
              <option value="corporate">CORPORATE</option>
              <option value="corporategift">CORPORATE GIFTING</option>
            </select>

            <select
              name="data-plan"
              id="data-plan"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select Data Plan</option>
              {dataPlan.map((plan) => (
                <option key={plan.id} value={plan.plan}>
                  {plan.plan} - ₦{plan.price} - {plan.duration}
                </option>
              ))}
            </select>

            <div>
              <label
                htmlFor="phonenumber"
                className="block font-semibold text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="pin"
                className="block font-semibold text-gray-700 mb-1"
              >
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
    </div>
  );
};

export default DataPage;
