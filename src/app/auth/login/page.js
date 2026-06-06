"use client";
import { useState } from "react";

import { EMAIL_REGEX } from "../../constants/regex";
import { login } from "../../api/auth";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .login-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0284c7, #7dd3fc);
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .login-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .login-card {
          position: relative;
          z-index: 10;
          width: 360px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 10px 40px rgba(3,105,161,0.2);
          animation: fadeIn 0.6s ease;
        }

        .logo-font {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          text-align: center;
          color: #0369a1;
          margin-bottom: 8px;
        }

        .logo-font span { color: #38bdf8; }

        .login-input:focus {
          border-color: #0ea5e9 !important;
          box-shadow: 0 0 0 2px rgba(14,165,233,0.15);
        }
      `}</style>

      <div className="login-root">
        {/* BG circles */}
        <div className="login-circle" style={{ width: 200, height: 200, top: 30, left: 40 }} />
        <div className="login-circle" style={{ width: 150, height: 150, bottom: 40, right: 60 }} />

        <div className="login-card">
          {/* Logo */}
          <a href="/" className="no-underline">
            <div className="logo-font">BASO<span>BAS</span></div>
          </a>

          {/* Subtitle */}
          <p className="text-center text-[13px] text-slate-500 mb-6">
            Welcome back! Login to continue
          </p>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-[12px] text-slate-500 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="login-input w-full px-3 py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] transition-all"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-[12px] text-slate-500 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="login-input w-full px-3 py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] transition-all"
              />
            </div>

            {/* Remember me + Forgot */}
            <div className="flex justify-between items-center text-[12px] mb-[18px]">
              <label className="flex items-center gap-1 text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="text-sky-600 no-underline hover:underline">Forgot?</a>
            </div>

            <button
              type="submit"
              className="w-full py-[10px] bg-sky-500 hover:bg-sky-600 text-white rounded-[25px] text-[14px] font-medium cursor-pointer transition-colors border-none"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-[13px] text-slate-500 mt-[18px]">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-sky-600 font-medium no-underline hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
