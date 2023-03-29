import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  const { currentColor } = useStateContext();
  const bgColorFinal = bgColor || currentColor;
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColorFinal, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
