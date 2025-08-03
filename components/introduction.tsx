"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function Introduction() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["DESIGN", "ANALYZE", "CODE", "BUILD"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="bg-white py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="mb-8">
              <div className="relative w-full h-40 bg-transparent rounded-lg overflow-hidden py-0">
                <Image
                  src="/intro-header.png"
                  alt="Hi This is Gaurav - Product Management / Innovation"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* "I CODE" text with animation */}
            <div className="mt-8">
              <h3 className="font-bold text-9xl leading-tight tracking-normal whitespace-nowrap text-[rgba(147,130,148,1)]">
                I{" "}
                <span
                  key={currentWordIndex}
                  className="inline-block text-[rgba(106,83,108,1)] border-0 rounded-xl opacity-50 bg-slate-200"
                  style={{
                    animation: "fadeInOut 2s ease-in-out infinite",
                    minWidth: "280px",
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  {words[currentWordIndex]}
                </span>
              </h3>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:translate-x-[30%]">
            <div className="relative">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden translate-x-[-28%] w-[420px] h-[420px]">
                <Image src="/portrait.png" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}
