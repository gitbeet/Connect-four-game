import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-600 text-white rounded-full font-bold px-6 py-3 hover:bg-gray-500"
    >
      {text}
    </button>
  );
};

export default Button;
