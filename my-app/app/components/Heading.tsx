import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="self-start p-10 mb-10 text-4xl font-bold text-black bg-opacity-20 rounded-3xl border-4 border-black border-solid sm:text-xl md:text-2xl lg:text-3xl bg-zinc-400">
      {text}
    </h1>
  );
};

export default Heading;
