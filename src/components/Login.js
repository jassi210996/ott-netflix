import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, changeFormState] = useState(true);

  const toggleForm = () => {
    changeFormState(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen w-screen bg-cover overflow-y-auto bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg')]">
        <form className="flex flex-col bg-black bg-opacity-75 p-8">
          <h3 className="text-white text-2xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black bg-opacity-50 text-white w-80 h-10 rounded-md p-4 py-6 border-solid border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 m-2"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="bg-black bg-opacity-50 text-white w-80 h-10 rounded-md p-4 py-6 border-solid border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 m-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black bg-opacity-50 text-white w-80 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 p-4 border-solid border-2 border-gray-500 py-6 m-2"
          />
          <button
            type="submit"
            className="text-white bg-red-600 w-80 h-10 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 p-2 m-2"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm m-2">Forgot your password?</p>
          <p className="text-gray-500 text-sm m-2">
            {isSignInForm ? "New to Netflix?" : "Already Registered"}{" "}
            <span className="font-bold text-white cursor-pointer" onClick={toggleForm}>
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
