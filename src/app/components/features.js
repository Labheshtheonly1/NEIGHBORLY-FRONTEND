"use client";
import { useState, useRef, useEffect } from "react";
import InfiniteMenu from "./ui/InfiniteMenu";
import { featuresData } from "./data/featuresData";
export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section
      id="features"
      className="min-h-screen select-none bg-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#54D1DC] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#358289] rounded-full opacity-5 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4ECDC4] rounded-full opacity-3 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#358289] mb-4">
          Features
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Experience the future of society management with our comprehensive
          digital platform
        </p>
      </div>

      {/* 3D Menu */}
      <div className="relative h-[60vh] w-full mb-16 z-10">
        <InfiniteMenu items={featuresData} onSelect={setSelectedFeature} />
      </div>

      {/* Feature Details Section */}
      {selectedFeature && (
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20">
          <div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 relative overflow-hidden animate-fade-in"
            style={{
              background: `linear-gradient(135deg, ${selectedFeature.color}10, rgba(255,255,255,0.05))`,
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-10 blur-3xl"
              style={{ backgroundColor: selectedFeature.color }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div
                  className="text-6xl mr-4"
                  style={{
                    filter: `drop-shadow(0 0 20px ${selectedFeature.color})`,
                  }}
                >
                  {selectedFeature.icon}
                </div>
                <h2 className="text-3xl font-medium text-black">
                  {selectedFeature.title}
                </h2>
              </div>

              <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                {selectedFeature.description}
              </p>

              {/* Feature details grid */}
              {selectedFeature.details && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedFeature.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: selectedFeature.color }}
                      />
                      <span className="text-white text-sm font-medium">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
