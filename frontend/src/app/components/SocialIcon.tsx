import React from "react";
import type { ReactNode } from "react";

type SocialIconProps = {
  icon: ReactNode;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  size?: string;
  hoverBg?: string;
  hoverText?: string;
};

export default function SocialIcon({
  icon,
  borderColor = "border-black",
  bgColor = "bg-gray-50",
  textColor = "text-black",
  size = "w-10 h-10",
  hoverBg = "",
  hoverText = "",
}: SocialIconProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full 
        border-2 ${borderColor} ${bgColor} ${textColor} ${size} cursor-pointer 
        transition-colors duration-300 
        ${hoverBg && `hover:${hoverBg}`} 
        ${hoverText && `hover:${hoverText}`}
      `}
    >
      {icon}
    </div>
  );
}
