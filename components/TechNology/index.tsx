import Image from "next/image";

export default function TechNology() {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center bg-[#171717] py-3 mt-16 sm:mt-32">
      <p className=" text-xl sm:text-2xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
        Technologies I work with
      </p>
      <div className="flex  gap-x-14 mt-9 flex-wrap w-auto mx-[3%] md:w-[43rem] justify-center gap-y-5">
        <Image src={"/Techs/reactjs.svg"} alt="react" width={100} height={50} />
        <Image
          src={"/Techs/nextjs.svg"}
          className="w-16"
          alt="react"
          width={100}
          height={0}
        />
        <Image src={"/Techs/Redux.svg"} alt="react" width={100} height={0} />
        <Image src={"/Techs/Node.svg"} alt="react" width={100} height={0} />
        <Image src={"/Techs/Tailwind.svg"} alt="react" width={100} height={0} />
        <Image src={"/Techs/express.svg"} alt="react" width={100} height={0} />
        <Image
          src={"/Techs/typescript.svg"}
          alt="react"
          width={100}
          height={0}
        />
        <Image src={"/Techs/socketio.svg"} alt="react" width={100} height={0} />
        <Image src={"/Techs/mongodb.svg"} alt="react" width={100} height={0} />
      </div>
    </div>
  );
}
