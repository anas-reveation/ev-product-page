import React from "react";
import clsx from "clsx";

type SliderDirectionProps = {
  title: string;
  variant: "green" | "gray";
  onClick?: () => void;
  className?: string;
};

const variantStyles = {
  green: {
    base: "bg-[#39B542] text-white",
    hover: "hover:bg-[#2e9d38]",
  },
  gray: {
    base: "bg-gray-300 text-black",
    hover: "hover:bg-gray-400",
  },
};

export function SliderDirection({
  title,
  variant,
  onClick,
  className = "",
}: SliderDirectionProps) {
  const style = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full w-8 h-8 flex items-center justify-center shadow transition duration-200",
        style.base,
        style.hover,
        className
      )}
    >
      {title}
    </button>
  );
}
