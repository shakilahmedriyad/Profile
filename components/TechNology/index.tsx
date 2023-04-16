import Image from "next/image";

export default function TechNology() {
  return (
    <div className="text-white text-center bg-[#171717] py-5 mt-36">
      <p className="text-2xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
        Technologies I work with
      </p>
      <div className="flex gap-x-14 mt-9 flex-wrap mx-[19%] justify-center gap-y-5">
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
