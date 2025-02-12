import React from "react";
import ContactForm from "@/app/components/ContactForm";

const Page = () => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center p-4 w-full h-screen">
      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute inset-0 bg-gradient-to-r rounded-2xl border backdrop-blur-sm border-purple-500/20 from-purple-900/30 to-purple-600/30" />
        <div className="relative z-10 p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
