"use client";

import { useState } from "react";
import { signup } from "../../api/auth";

export default function SignupPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .signup-root {
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

        .signup-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .signup-card {
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
        }

        .logo-font span { color: #38bdf8; }
      `}</style>

      <div className="signup-root">
        {/* BG circles */}
        <div className="signup-circle" style={{ width: 200, height: 200, top: 30, left: 40 }} />
        <div className="signup-circle" style={{ width: 150, height: 150, bottom: 40, right: 60 }} />

        <div className="signup-card">
          {/* Logo */}
          <a href="/" className="no-underline">
          <div className="logo-font">BASO<span>BAS</span></div>
          </a>

          {/* Subtitle */}
          <p className="text-center text-[13px] text-slate-500 mb-5 mt-1">
            Create your account
          </p>

          {/* Toggle */}
          <div className="flex bg-sky-100 rounded-[30px] mb-5 overflow-hidden">
            <button
              type="button"
              onClick={() => setIsAdmin(false)}
              className={`flex-1 py-2 text-[13px] text-center cursor-pointer transition-colors ${
                !isAdmin ? "bg-sky-500 text-white font-medium" : "text-sky-700"
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setIsAdmin(true)}
              className={`flex-1 py-2 text-[13px] text-center cursor-pointer transition-colors ${
                isAdmin ? "bg-sky-500 text-white font-medium" : "text-sky-700"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-[14px]">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-[10px] py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] focus:border-sky-500 transition-colors"
              />
            </div>
            <div className="mb-[14px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-[10px] py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] focus:border-sky-500 transition-colors"
              />
            </div>
            <div className="mb-[14px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-[10px] py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] focus:border-sky-500 transition-colors"
              />
            </div>

            {isAdmin && (
              <div className="mb-[14px]">
                <input
                  type="text"
                  placeholder="Admin Secret Key"
                  className="w-full px-[10px] py-[10px] rounded-lg border border-sky-200 outline-none text-[14px] focus:border-sky-500 transition-colors"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-[11px] mt-[10px] bg-sky-500 hover:bg-sky-600 text-white rounded-[10px] text-[14px] cursor-pointer transition-colors border-none"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-[13px] text-slate-500 mt-[14px]">
            Already have an account?{" "}
            <a href="/auth/login" className="text-sky-600 font-medium no-underline hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
