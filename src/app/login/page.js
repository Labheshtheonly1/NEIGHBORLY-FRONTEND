'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';
import api from '../api/api'
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function FireflyParticle() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}px`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    });
  }, []);

  return <div className="firefly-particle" style={style} />;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await api.post("/api/auth/login", { email, password });
      if (response.status === 200) {
        console.log("Login successful:", response.data.user);
        // Try to get role from response
        const role = response.data?.role || response.data?.userType || response.data?.user?.role;
        alert(`✅ Login successful!\nRole: ${role}`);
        if (role === "owner") {
          router.push("/Admindashboard");
        }
        if (role === "resident") {
          router.push("/Resdashboard");
        }
      }
    } catch (err) {
      setError(
        `❌ Login failed: ${err.response?.data?.message || err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-in clicked');
  };

  const particles = Array.from({ length: 90 });

  return (
    <div className={`flex min-h-screen bg-gray-950 text-white relative ${poppins.className}`}>
      {/* Neighborly Logo at Top Right */}
      <div className="absolute top-8 right-8 z-10">
        <Image
          src="/logo.svg"
          alt="Neighborly Logo"
          width={150}
          height={40}
          className="h-auto"
        />
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
            <FireflyParticle key={index} />
          ))}
        </div>
      </div>

      {/* Right section with the login form and background */}
      <div className="relative flex-1">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md"
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
                <label htmlFor="email" className="block text-xl font-medium text-white sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-2 border-white bg-black text-white shadow-sm focus:border-[#54D1DC] focus:ring focus:ring-[#54D1DC] focus:ring-opacity-50 focus:outline-none focus:ring-0 px-4 py-4 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:-translate-y-1"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-xl font-medium text-white sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-2 border-white bg-black text-white shadow-sm focus:border-[#54D1DC] focus:ring focus:ring-[#54D1DC] focus:ring-opacity-50 focus:outline-none focus:ring-0 px-4 py-4 pr-12 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:-translate-y-1"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 text-sm font-medium focus:outline-none focus:ring-0"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#54D1DC] focus:ring-[#54D1DC] border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-0"
                />
                <label htmlFor="remember-me" className="ml-4 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              {error && (
                <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg mb-2">
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-950 bg-[#358289] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#358289]"
              >
                <span className="text-2xl">{loading ? "Signing in..." : "Sign in"}</span>
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
                className="py-2 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center"
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