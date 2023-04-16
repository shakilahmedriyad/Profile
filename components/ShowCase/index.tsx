import Image from "next/image";
import ProjectComponent from "./ProjectComponent";
import { HiOutlineExternalLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

export default function ShowCase() {
  return (
    <div className="mx-[16%] mt-16 flex justify-center flex-col items-center">
      <p className="text-2xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
        Projects I worked on
      </p>
      <ProjectComponent
        image={"/projects/NFT.jpg"}
        title="NFT Selling app"
        description="This app is designed and developed to Sell Nfts"
        technology="nextjs , tailwind"
      />
      <ProjectComponent
        image="/projects/Management.jpg"
        title="Management app"
        description="A app which helps you to manage your task and projects"
        technology="nextjs, express , tailwind , typescript"
      />
      <div className="flex mt-11">
        <div className="w-96 bg-gray-300 relative h-60 overflow-hidden ">
          <Image
            src={"/projects/RealTorBack.jpg"}
            className="w-[21rem] shadow-2xl h-56 absolute -top-20 -right-10 z-1 object-cover "
            width={1920}
            height={1080}
            alt="NFT"
          />
          <Image
            src={"/projects/RealTorTop.jpg"}
            className="w-[21rem] left-6 shadow-2xl h-56 absolute z-2 top-24 object-cover "
            width={1920}
            height={1080}
            alt="NFT"
          />
        </div>

        <div className="text-gray-200 mx-7 my-3 text-sm w-72 ">
          <p className="text-2xl font-medium">Realtor Landing page</p>
          <p className="mt-4">
            This Landing page is design for a Realtor business
          </p>
          <p className="uppercase text-gray-400 mt-7">Technologies used</p>
          <p className="mt-2 text-gray-300">HTML5 , scss</p>
          <div className="mt-6 flex gap-x-7">
            <div className="flex  items-center gap-x-2">
              <HiOutlineExternalLink size={23} />
              <p>Demo</p>
            </div>
            <div className="flex  items-center gap-x-2">
              <DiGithubBadge size={25} />
              <p>source code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
