
"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState("roles");

  return (
    <div className="flex min-h-screen flex-col bg-black p-4 text-white">
      {/* Title */}
      <div className="relative top-150 right-59 z-20">
        <p className="text-7xl">Digital Society.</p>
        <p className="text-7xl text-[#54D1DC]">Simplified.</p>
      </div>

      {/* Floating house */}
      <div className="relative my-15 bottom-0 flex justify-center">
        <div
          className="glowing-particle absolute top-270 left-[100%]"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-0 left-[95%]"
          style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-0 left-[90%]"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-[10%] left-[85%]"
          style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-[10%] left-[80%]"
          style={{ animationDelay: "1.1s", animationDuration: "2.8s" }}
        ></div>
        <Image
          src="/landing-house.svg"
          width={510}
          height={510}
          alt="House"
          draggable="false"
          className="animate-float top-90 left-140 relative"
        />
        <div className="relative inset-x-40 top-170 bottom-1/2 z-30">
          <div className="mx-auto bottom-0 h-[100px] w-[390px] bg-[#54D1DC] opacity-60 blur-2xl"></div>
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 mt-18 top-10 right-59 text-3xl">
        <p>
          Unifying residents, owners, and workers on <br /> one transparent
          platform
        </p>
      </div>

      {/* Register */}
      <div className="relative top-10 right-59 z-10 mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-[#54D1DC] font-bold px-8 py-3 text-3xl text-black shadow-lg hover:scale-110 transition"
        >
          REGISTER
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setShowModal(false);
              setStep("roles");
            }}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-[url('/register.png')] shadow-2xl border border-white/20 p-10">
            {/* Role Selection */}
            {step === "roles" && (
              <>
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Select your Role
                </h2>
                <div className="flex flex-col gap-5">
                  <button
                    onClick={() => setStep("adminStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition"
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => setStep("residentStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition"
                  >
                    Resident
                  </button>
                  <button
                    onClick={() => setStep("staffStep1")}
                    className="rounded-lg border border-white/90 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition"
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
                  alert("✅ Admin Registered!");
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
                  alert("✅ Resident Registered!");
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
                  alert("✅ Staff Registered!");
                  setShowModal(false);
                  setStep("roles");
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* Reusable Form Step */
function FormStep({ role, title, fields, onBack, onNext }) {
  const [inputs, setInputs] = useState(Array(fields.length).fill(""));
  const [error, setError] = useState("");

  const handleChange = (i, val) => {
    const newInputs = [...inputs];
    newInputs[i] = val;
    setInputs(newInputs);
  };

  const handleNext = () => {
    if (inputs.some((val) => val.trim() === "")) {
      setError("⚠️ Please fill all required fields.");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white text-center mb-8">{role}</h2>
      <p className="text-lg mb-4">{title}</p>

      {fields.map((f, i) => (
        <input
          key={i}
          type="text"
          placeholder={f}
          value={inputs[i]}
          onChange={(e) => handleChange(i, e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-black/40 border border-white/30 text-white"
          required
        />
      ))}

      {error && <p className="text-red-400 mb-3">{error}</p>}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="rounded-lg bg-gray-600 px-6 py-3 text-white font-semibold hover:scale-105 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="rounded-lg bg-[#54D1DC] px-6 py-3 text-black font-semibold hover:scale-105 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* Final Step (Password) */
function FinalStep({ role, onBack, onSubmit }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!password || !confirm) {
      setError("⚠️ Please fill all fields.");
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
      <h2 className="text-2xl font-bold text-white text-center mb-8">{role}</h2>
      <p className="text-lg mb-4">Step 3: Account Setup</p>

      <input
        type="password"
        placeholder="Password*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-lg mb-4 bg-black/40 border border-white/30 text-white"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password*"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full p-3 rounded-lg mb-4 bg-black/40 border border-white/30 text-white"
        required
      />

      <div className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="w-4 h-4"
        />
        <label className="text-sm">I agree to all the Terms and Conditions</label>
      </div>

      {error && <p className="text-red-400 mb-3">{error}</p>}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="rounded-lg bg-gray-600 px-6 py-3 text-white font-semibold hover:scale-105 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-[#54D1DC] px-6 py-3 text-black font-semibold hover:scale-105 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
