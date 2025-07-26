import { LockKeyhole, UserRound } from 'lucide-react';
import React from 'react'
const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center "
    >
      <div className="p-8 rounded-lg shadow-xl w-full max-w-md text-purple-700">
        <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
        <form>
          <div className="relative mb-6">
            <input
              type="email"
              id="username"
              placeholder="Username"
              className="w-full p-4 pl-12 rounded-lg bg-white/50 bg-opacity-20 border  border-opacity-30 placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <UserRound className="absolute left-4 top-1/2 transform -translate-y-1/2  text-xl opacity-75" />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-4 pl-12 rounded-lg bg-white/50 bg-opacity-20 border  border-opacity-30 placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <LockKeyhole className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bbg-black text-xl opacity-75" />
          </div>
          <div className="flex justify-between items-center mb-6 text-sm">
            <label htmlFor="remember" className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 mr-2 bg-white bg-opacity-20"
              />
              Remember me
            </label>
            <a href="#" className="text-bbg-black hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500/80 hover:bg-purple-700/80 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out"
          >
            Login
          </button>
          <p className="text-center mt-6 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-purple-700/80 hover:underline font-semibold">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login