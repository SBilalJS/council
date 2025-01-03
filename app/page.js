"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (username === "admin" && password === "admin") {
      redirect("http://localhost:3000/home"); // Redirect on success
    } else {
      setError("Username or password is incorrect"); // Show error message
    }
  };

  return (
    <section className="bg-[#E9EFFE] min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Login Header */}
        <h2 className="text-2xl font-bold text-center text-[#3A40D8]">
          Login to My Council AI
        </h2>

        {/* Login Form */}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1D4ED8] text-white px-4 py-2 rounded-lg hover:bg-[#1E3A8A] transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
