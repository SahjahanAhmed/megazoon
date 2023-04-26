import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-100vh flex items-center justify-center theme-white">
      <div className="flex flex-col gap-4 bg-slate-800 p-2 rounded-lg text-white">
        <form className="flex flex-col items-center justify-center gap-4 max-w-400px min-w-200px ">
          <h1 className="mb-6 text-center text-2xl font-ubuntu">Sign Up</h1>
          <div className="flex flex-col w-100% min-w-200px">
            <label htmlFor="email-signup">Email</label>
            <input
              type="email"
              name="email-signup"
              className="rounded-lg p-1 text-gray-900"
              required
              autoComplete="off"
              placeholder="Enter Email ..."
            />
          </div>
          <div className="flex flex-col w-100%">
            <label htmlFor="password-signup">Password</label>
            <input
              type="password"
              name="password-signup"
              className="rounded-lg p-1 text-gray-900 min-w-200px"
              required
              placeholder="Enter Password ..."
            />

            <label htmlFor="confirm-password-signup" className="mt-3">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password-signup"
              className="rounded-lg p-1 text-gray-900"
              required
              placeholder="Enter Password again ..."
            />
          </div>
          <button
            type="submit"
            className="bg-transparent shadow-bothxs rounded-xl px-4 py-1 hover:bg-gray-900 transition-all"
          >
            Sign Up
          </button>
        </form>
        <h3 className="w-100% mt-2">
          Already Have an Account ?{" "}
          <button type="button" className=" text-blue-500 hover:underline">
            sign in
          </button>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
