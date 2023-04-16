import { DiGithubBadge } from "react-icons/di";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
type obj = {
  image: string;
  technology: string;
  title: string;
  description: string;
  gitUrl: string;
  demoUrl: string;
};
export default function ProjectComponent({
  image,
  technology,
  title,
  description,
  gitUrl,
  demoUrl,
}: obj) {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row mt-11">
      <div className=" sm:w-96 h-60 bg-white">
        <Image
          src={image}
          className="w-96 h-60 object-cover "
          width={1920}
          height={1080}
          alt="NFT"
        />
      </div>

      <div className="text-gray-200 mx-7 my-3 text-sm w-72 ">
        <p className="text-2xl font-medium">{title}</p>
        <p className="mt-4">{description}</p>
        <p className="uppercase text-gray-400 mt-7">Technologies used</p>
        <p className="mt-2 text-gray-300">{technology}</p>
        <div className="mt-6 flex gap-x-7">
          <Link
            href={demoUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <HiOutlineExternalLink size={23} />
            <p>Demo</p>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <DiGithubBadge size={25} />
            <p>source code</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
