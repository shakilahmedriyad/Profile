import { Button, TextInput, Textarea } from "evergreen-ui";

export default function Contacts() {
  return (
    <div className="w-full py-7 mt-28 mb-10 text-gray-100 flex flex-col justify-center items-center  bg-[#171717]">
      <div className="w-[35rem] text-sm ">
        <div className="space-y-2">
          <p>Interested in a collabaration?</p>
          <p className="text-4xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
            Contact Me
          </p>
        </div>
        <div className="w-full space-y-2 mt-10">
          <p>What should I call you ?</p>
          <TextInput
            className="!bg-[#1F1F1F] !text-gray-200 !border-none"
            height={45}
            placeholder="Tonny Stark"
            width={"100%"}
          />
        </div>
        <div className="mt-7 space-y-2">
          <p>Your email address ?</p>
          <TextInput
            className="!bg-[#1F1F1F] !text-gray-200 !border-none"
            height={45}
            type="email"
            placeholder="Iron@Man.com"
            width={"100%"}
          />
        </div>
        <div className="mt-7 space-y-2">
          <p>Your message</p>
          <Textarea
            rows={7}
            resize={"none"}
            placeholder="Want to know about yourself"
            className="!bg-[#1F1F1F] !text-base !text-gray-200 !border-none"
          />
        </div>
        <Button className="mt-7 bg-gradient-to-br !py-5 !px-12 !border-gray-500 !text-base !text-gray-200 from-[#464444] via-[#1F1F1F] to-[#1F1F1F] w-20 !rounded-full">
          Send
        </Button>
      </div>
    </div>
  );
}
