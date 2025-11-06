


import { NavLink, Outlet } from "react-router";

const PaymentPage = () => {
  const base = "px-6 py-3 rounded-lg font-semibold border transition";
  const active = "bg-blue-600 text-white border-blue-600";
  const inactive = "bg-white text-blue-600 border-blue-600 hover:bg-blue-50";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Select Payment Method</h1>

      <div className="flex gap-4 mb-10">
        <NavLink
          to="/payment/palmpay"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          PalmPay
        </NavLink>

        <NavLink
          to="/payment/monie"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Moniepoint
        </NavLink>
      </div>

      {/* This renders the selected container */}
      <Outlet />
    </div>
  );
};

export default PaymentPage;
