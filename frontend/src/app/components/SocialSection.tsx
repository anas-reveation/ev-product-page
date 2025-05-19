import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";

export default function SocialSection() {
  return (
    <div className="w-full text-black  bg-gray-200 h-40 flex items-center">
      <div className="container  flex items-center justify-end space-x-2 px-4">
        <p className="text-lg font-semibold">Follow Us</p>

        <SocialIcon
          icon={<FaFacebookF />}
          borderColor="border-black"
          textColor="text-black"
          hoverBg="bg-[#39B542]"
          hoverText="text-[#39B542]"
        />
        <SocialIcon
          icon={<FaLinkedinIn />}
          borderColor="border-black"
          textColor="text-black"
          hoverBg="bg-[#39B542]"
          hoverText="text-[#39B542]"
        />
        <SocialIcon
          icon={<FaInstagram />}
          borderColor="border-black"
          textColor="text-black"
          hoverBg="bg-[#39B542]"
          hoverText="text-[#39B542]"
        />
        <SocialIcon
          icon={<FaYoutube />}
          borderColor="border-black"
          textColor="text-black"
          hoverBg="bg-[#39B542]"
          hoverText="text-[#39B542]"
        />
      </div>
    </div>
  );
}
