import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-white">
        {/* <Image src={""} alt="image" /> */}
      </div>
      <p className="text-sm font-medium text-gray-50 mt-5">Hi , I am Riyad</p>
      <p className="text-5xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
        Full-stack developer
      </p>
      <div className="flex gap-x-4 mt-12">
        <div className="flex gap-x-1 cursor-pointer items-center">
          <CiLinkedin size={25} />
          <p className="text-sm">LinkedIn</p>
        </div>
        <div className="flex gap-x-1 cursor-pointer items-center">
          <DiGithubBadge size={29} />
          <p className="text-sm">github</p>
        </div>
        <div className="flex gap-x-2 border cursor-pointer border-gray-400 rounded-full pl-2 pr-3 py-1.5  justify-center items-center">
          <MdOutlineAlternateEmail size={23} />
          <p className="text-xs">Copy Email</p>
        </div>
      </div>
    </div>
  );
}
