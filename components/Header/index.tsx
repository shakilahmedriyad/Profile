import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

export default function Header() {
  const copiyHandler = () => toast.success("email copied");
  return (
    <div className="text-white flex flex-col items-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-[8.3rem] h-[8.3rem] border-4 border-gray-300 flex justify-center items-center rounded-full bg-white">
        <Image
          className="w-32 hover:scale-110 h-32 rounded-full object-cover object-center bg-white"
          src={"/Profile/ProfileFixed.jpg"}
          width={1920}
          height={1080}
          alt="image"
        />
      </div>
      <p className="text-sm font-medium text-gray-50 mt-10">Hi , I am Riyad</p>
      <p className=" text-3xl sm:text-5xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-4">
        Full-stack developer
      </p>
      <div className="flex text-xs sm:text-sm gap-x-4 mt-6">
        <Link
          className="flex gap-x-1 cursor-pointer items-center"
          href={"https://www.linkedin.com/in/shakil-ahmed-riyad-6458b8228/"}
          target="_blank"
        >
          <CiLinkedin size={25} />
          <p className="">LinkedIn</p>
        </Link>
        <Link
          href={"https://github.com/Riyad139"}
          target="_blank"
          className="flex gap-x-1 cursor-pointer items-center"
        >
          <DiGithubBadge size={29} />
          <p className="">github</p>
        </Link>
        <CopyToClipboard text="riyad.ahmed1886@gmail.com">
          <div
            onClick={() => copiyHandler()}
            className="flex gap-x-1 border cursor-pointer border-gray-400 rounded-full pl-3 pr-4 py-1.5  justify-center items-center"
          >
            <MdOutlineAlternateEmail size={17} />
            <p className="text-xs">Copy Email</p>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
