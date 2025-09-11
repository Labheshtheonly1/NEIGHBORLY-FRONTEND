"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState("roles");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
                Digital Society.
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#358289] leading-tight">
                Simplified.
              </h1>
            </div>

            {/* Description */}
            <div className="mb-10 opacity-90">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                Unifying residents, owners, and workers on <br />
                one transparent platform
              </p>
            </div>

            {/* Register Button */}
            <button
              onClick={() => setShowModal(true)}
              className="rounded-lg bg-[#358289] font-bold px-8 py-4 text-2xl lg:text-3xl text-white shadow-lg hover:scale-105 hover:bg-[#2a6b72] transition-all duration-300 hover:shadow-2xl"
            >
              REGISTER
            </button>
          </div>

          {/* Right Side - Floating House with Particles */}
          <div className="flex-1 flex justify-center items-center relative min-h-[500px]">
            {/* Particle Container */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Glowing particles */}
              <div
                className="glowing-particle absolute top-1/4 right-1/4"
                style={{ animationDelay: "0s", animationDuration: "2s" }}
              ></div>
              <div
                className="glowing-particle absolute bottom-1/4 right-1/3"
                style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
              ></div>
              <div
                className="glowing-particle absolute bottom-1/3 right-1/2"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              ></div>
              <div
                className="glowing-particle absolute top-1/3 right-2/3"
                style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}
              ></div>
              <div
                className="glowing-particle absolute bottom-1/2 right-3/4"
                style={{ animationDelay: "1.1s", animationDuration: "2.8s" }}
              ></div>
              <div
                className="glowing-particle absolute top-2/3 left-1/4"
                style={{ animationDelay: "2s", animationDuration: "2.3s" }}
              ></div>
              <div
                className="glowing-particle absolute top-1/2 left-1/3"
                style={{ animationDelay: "1.2s", animationDuration: "2.7s" }}
              ></div>
            </div>

            {/* House Image Container */}
            <div className="relative z-10">
              <Image
                src="/landing-house.svg"
                width={450}
                height={450}
                alt="Digital Society House"
                draggable="false"
                className="animate-float w-full h-auto max-w-md lg:max-w-lg"
                priority
              />

              {/* Glow effect under house */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-20 bg-[#54D1DC] opacity-40 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setShowModal(false);
              setStep("roles");
            }}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl border border-white/20 p-6 md:p-10 max-h-[90vh] overflow-y-auto">
            {/* Role Selection */}
            {step === "roles" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                  Select your Role
                </h2>
                <div className="flex flex-col gap-5">
                  <button
                    onClick={() => setStep("adminStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition-all duration-200 hover:scale-105"
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => setStep("residentStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition-all duration-200 hover:scale-105"
                  >
                    Resident
                  </button>
                  <button
                    onClick={() => setStep("staffStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition-all duration-200 hover:scale-105"
                  >
                    Staff
                  </button>
                </div>
              </>
            )}

            {/* ADMIN Steps */}
            {step === "adminStep1" && (
              <FormStep
                role="Admin"
                title="Step 1: Personal Information"
                fields={["Name*", "Email*", "Phone No*"]}
                onBack={() => setStep("roles")}
                onNext={() => setStep("adminStep2")}
              />
            )}
            {step === "adminStep2" && (
              <FormStep
                role="Admin"
                title="Step 2: Society Information"
                fields={[
                  "Society Name*",
                  "Address*",
                  "City*",
                  "State*",
                  "Postal Code*",
                ]}
                onBack={() => setStep("adminStep1")}
                onNext={() => setStep("adminStep3")}
              />
            )}
            {step === "adminStep3" && (
              <FinalStep
                role="Admin"
                onBack={() => setStep("adminStep2")}
                onSubmit={() => {
                  alert("✅ Admin Registered Successfully!");
                  setShowModal(false);
                  setStep("roles");
                }}
              />
            )}

            {/* RESIDENT Steps */}
            {step === "residentStep1" && (
              <FormStep
                role="Resident"
                title="Step 1: Personal Information"
                fields={["Name*", "Email*", "Phone No*"]}
                onBack={() => setStep("roles")}
                onNext={() => setStep("residentStep2")}
              />
            )}
            {step === "residentStep2" && (
              <FormStep
                role="Resident"
                title="Step 2: Flat / Block Information"
                fields={["Flat Number*", "Block*", "Floor*"]}
                onBack={() => setStep("residentStep1")}
                onNext={() => setStep("residentStep3")}
              />
            )}
            {step === "residentStep3" && (
              <FinalStep
                role="Resident"
                onBack={() => setStep("residentStep2")}
                onSubmit={() => {
                  alert("✅ Resident Registered Successfully!");
                  setShowModal(false);
                  setStep("roles");
                }}
              />
            )}

            {/* STAFF Steps */}
            {step === "staffStep1" && (
              <FormStep
                role="Staff"
                title="Step 1: Personal Information"
                fields={["Name*", "Email*", "Phone No*"]}
                onBack={() => setStep("roles")}
                onNext={() => setStep("staffStep2")}
              />
            )}
            {step === "staffStep2" && (
              <FormStep
                role="Staff"
                title="Step 2: Work Information"
                fields={["Department*", "Role*", "Shift Timing*"]}
                onBack={() => setStep("staffStep1")}
                onNext={() => setStep("staffStep3")}
              />
            )}
            {step === "staffStep3" && (
              <FinalStep
                role="Staff"
                onBack={() => setStep("staffStep2")}
                onSubmit={() => {
                  alert("✅ Staff Registered Successfully!");
                  setShowModal(false);
                  setStep("roles");
                }}
              />
            )}

            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false);
                setStep("roles");
              }}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* Reusable Form Step Component */
function FormStep({ role, title, fields, onBack, onNext }) {
  const [inputs, setInputs] = useState(Array(fields.length).fill(""));
  const [error, setError] = useState("");

  const handleChange = (i, val) => {
    const newInputs = [...inputs];
    newInputs[i] = val;
    setInputs(newInputs);
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleNext = () => {
    const emptyFields = inputs.some((val) => val.trim() === "");
    if (emptyFields) {
      setError("⚠️ Please fill all required fields.");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
        {role} Registration
      </h2>
      <p className="text-lg mb-6 text-gray-300">{title}</p>

      <div className="space-y-4">
        {fields.map((field, i) => (
          <input
            key={i}
            type={
              field.toLowerCase().includes("email")
                ? "email"
                : field.toLowerCase().includes("phone")
                ? "tel"
                : "text"
            }
            placeholder={field}
            value={inputs[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-full p-3 rounded-lg bg-black/60 border border-white/30 text-white placeholder-gray-400 focus:border-[#54D1DC] focus:outline-none focus:ring-2 focus:ring-[#54D1DC]/20 transition-all"
            required
          />
        ))}
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-between mt-8 gap-4">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg bg-gray-600 px-6 py-3 text-white font-semibold hover:scale-105 hover:bg-gray-500 transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 rounded-lg bg-[#54D1DC] px-6 py-3 text-black font-semibold hover:scale-105 hover:bg-[#4bc5d1] transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* Final Step Component (Password Setup) */
function FinalStep({ role, onBack, onSubmit }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!password || !confirm) {
      setError("⚠️ Please fill all fields.");
    } else if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters long.");
    } else if (password !== confirm) {
      setError("⚠️ Passwords do not match.");
    } else if (!checked) {
      setError("⚠️ Please agree to Terms & Conditions.");
    } else {
      setError("");
      onSubmit();
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
        {role} Registration
      </h2>
      <p className="text-lg mb-6 text-gray-300">Step 3: Account Setup</p>

      <div className="space-y-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password* (min. 6 characters)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
            className="w-full p-3 rounded-lg bg-black/60 border border-white/30 text-white placeholder-gray-400 focus:border-[#54D1DC] focus:outline-none focus:ring-2 focus:ring-[#54D1DC]/20 transition-all pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password*"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            if (error) setError("");
          }}
          className="w-full p-3 rounded-lg bg-black/60 border border-white/30 text-white placeholder-gray-400 focus:border-[#54D1DC] focus:outline-none focus:ring-2 focus:ring-[#54D1DC]/20 transition-all"
          required
        />
      </div>

      <div className="flex items-start gap-3 mt-6 mb-6">
        <input
          type="checkbox"
          id="terms"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (error) setError("");
          }}
          className="w-5 h-5 mt-1 rounded border-white/30 bg-black/60 text-[#54D1DC] focus:ring-[#54D1DC]/20"
        />
        <label
          htmlFor="terms"
          className="text-sm text-gray-300 leading-relaxed"
        >
          I agree to all the{" "}
          <span className="text-[#54D1DC] underline cursor-pointer hover:text-[#4bc5d1]">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span className="text-[#54D1DC] underline cursor-pointer hover:text-[#4bc5d1]">
            Privacy Policy
          </span>
        </label>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-between gap-4">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg bg-gray-600 px-6 py-3 text-white font-semibold hover:scale-105 hover:bg-gray-500 transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 rounded-lg bg-[#54D1DC] px-6 py-3 text-black font-semibold hover:scale-105 hover:bg-[#4bc5d1] transition-all duration-200"
        >
          Register
        </button>
      </div>
    </div>
  );
}
