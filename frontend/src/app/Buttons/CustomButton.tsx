import React from "react";
import clsx from "clsx";

type CustomButtonProps = {
  label: string;
  variant: "gray" | "green" | "blue";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const colorVariants = {
  gray: {
    base: "bg-gray-300 text-black",
    hover: "hover:bg-black hover:text-white border border-gray-400",
  },
  green: {
    base: "bg-[#39B542] text-white",
    hover: "hover:bg-white hover:text-black border border-[#39B542]-400",
  },
  blue: {
    base: "bg-blue-600 text-white",
    hover: "hover:bg-blue-700",
  },
};

export default function CustomButton({
  label,
  variant,
  onClick,
  className = "",
  type = "button",
}: CustomButtonProps) {
  const variantClasses = colorVariants[variant] || colorVariants.green;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 text-sm rounded-lg transition duration-200 font-semibold",
        variantClasses.base,
        variantClasses.hover,
        className
      )}
    >
      {label}
    </button>
  );
}
