import React from "react";
import ContactForm from "@/app/components/ContactForm";
import MatrixRain from "@/components/MatrixRain";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#030014] to-[#090041] text-white overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-40" />
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg blur-xl opacity-75"></div>
            <div className="relative bg-black/50 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
              <div className="p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
