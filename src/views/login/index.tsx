"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleExclamation } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const LoginUi: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  console.log(flashMessage);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFlashMessage(null);
    setError(false);

    try {
      const response = await fetch(
        "https://social-login.druckland.de/api/v1/user/signin",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(
          response.status === 419
            ? "Session expired or authentication issue."
            : `Error: ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log(data);

      setFlashMessage(data.message || "Login successful!");
    } catch (err: any) {
      console.error(err);
      setError(true);
      setFlashMessage(err.message || "An error occurred.");
    }
  };

  return (
    <div className=" bg-gray-100">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-3 gap-20 items-center py-12">
        {/* Left Section: Image or Video */}
        <div className="col-span-2 flex justify-center items-center bg-white rounded-lg shadow-lg p-6 aspect-[16/11]">
          <p className="text-center text-gray-600">
            Image or Video <br /> of our services
          </p>
        </div>

        {/* Right Section: Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full">
          <Image
            src="/images/Drukland.de.svg"
            alt="Drukland Logo"
            width={120}
            height={40}
            className="mx-auto w-fit"
          />
          <div className="mt-8 text-center">
            <p className="text-[#0F0F0F] text-2xl">Sign In to your account</p>
            <p className="text-sm text-center text-[#292929] mb-6">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-base font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
          {flashMessage && (
            <div
              className={`flex justify-center items-center gap-2 text-xs p-2 mb-4 text-center rounded ${
                error ? "text-red-500" : "text-green-500"
              }`}
            >
              <FaCircleExclamation />
              {flashMessage}
            </div>
          )}
          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to all{" "}
                <Link href="/terms" className="text-blue-500 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>

          {/* OR Divider */}
          <div className="my-6 flex items-center justify-between">
            <span className="w-1/5 border-t"></span>
            <span className="text-xs text-gray-500 uppercase">
              or sign in with
            </span>
            <span className="w-1/5 border-t"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50"
            >
              <BsLinkedin color="#0076B2" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50"
            >
              <FcGoogle />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50"
            >
              <FaFacebook color="#1877F2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUi;
