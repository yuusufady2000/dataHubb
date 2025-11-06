import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-green-200 overflow-hidden px-4">
      <div className="absolute w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] bg-green-400 rounded-full blur-3xl opacity-20 top-[-10rem] left-[-10rem]"></div>
      <div className="absolute w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] bg-green-500 rounded-full blur-3xl opacity-20 bottom-[-10rem] right-[-10rem]"></div>

      <div className="relative flex flex-col w-full max-w-md bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 border border-green-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700">
          Welcome Back
        </h2>

        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-green-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-green-500 active:scale-[0.98] transition duration-200"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signupage"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
