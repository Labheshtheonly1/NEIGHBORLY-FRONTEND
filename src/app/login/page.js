'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted!');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-in clicked');
  };

  const particles = Array.from({ length: 90 });

  return (
    <div className={`flex min-h-screen bg-gray-950 text-white relative ${poppins.className}`}>
      {/* "Neighborly" Title at Top Right */}
      <div className="absolute top-8 right-8 z-10">
        <h1 className="text-4xl font-bold text-white">Neighborly</h1>
      </div>

      {/* Left section with the illustration */}
      <div className="flex-1 hidden md:flex items-center justify-center p-8">
        <div className="w-full max-w-md h-auto relative float-animation">
          <Image
            src="/loginbuilding.svg"
            alt="Society Building"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          {particles.map((_, index) => (
            <div
              key={index}
              className="firefly-particle"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Right section with the login form and background */}
      <div className="relative flex-1">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center filter "
          style={{ backgroundImage: `url('/loginright.svg')` }}
        ></div>

        {/* Content Layer with Login Form */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <div className="w-full p-24 space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold">Login</h2>
              <p className="mt-2 text-lg text-gray-400">
                New Here?{' '}
                <Link href="/#about" className="text-[#54D1DC] hover:underline">
                  Register
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-white"></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full rounded-md border-2 border-white bg-black text-white shadow-sm focus:border-[#54D1DC] focus:ring focus:ring-[#54D1DC] focus:ring-opacity-50 px-4 py-4 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:-translate-y-1"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xl font-medium text-white"></label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full rounded-md border-2 border-white bg-black text-white shadow-sm focus:border-[#54D1DC] focus:ring focus:ring-[#54D1DC] focus:ring-opacity-50 px-4 py-4 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:-translate-y-1"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#54D1DC] focus:ring-[#54D1DC] border-gray-700 rounded bg-gray-800"
                />
                <label htmlFor="remember-me" className="ml-4 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-5 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-950 bg-[#358289] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#54D1DC] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-2xl">Sign in</span>
              </button>
            </form>

            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-400">or Sign in with</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="py-2 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
              >
                <Image
                  src="/google.svg"
                  alt="Google Icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}