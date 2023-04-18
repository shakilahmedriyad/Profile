import { Button, TextInput, Textarea } from "evergreen-ui";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { json } from "stream/consumers";

export default function Contacts() {
  const nameRef = useRef<HTMLInputElement | undefined>();
  const emailRef = useRef<HTMLInputElement | undefined>();
  const messageRef = useRef<HTMLInputElement | undefined>();
  const onSubmit = async () => {
    if (
      nameRef.current?.value?.length &&
      nameRef.current?.value.length > 2 &&
      emailRef.current?.value &&
      emailRef.current?.value.length > 4 &&
      messageRef.current?.value &&
      messageRef.current.value.length > 1
    ) {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      };

      const res = await fetch("/api/Contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          Accept: "applicaion/json",
        },
      });

      if (res.status === 200) {
        toast.success("Email sent successfully");
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      }
    } else {
      toast.error("please fill all the field properly");
    }
  };
  return (
    <div className=" w-full py-7 mt-28 mb-10 text-gray-100 flex flex-col justify-center items-center  ">
      <Toaster position="top-right" />

      <div className=" w-[80%] sm:w-[60%] md:w-[46rem] md:bg-[#171717]  md:px-24 md:shadow-xl py-16 rounded-xl text-sm ">
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
            height={55}
            //@ts-ignore
            ref={nameRef}
            placeholder="Tonny Stark"
            width={"100%"}
          />
        </div>
        <div className="mt-7 space-y-2">
          <p>Your email address ?</p>
          <TextInput
            className="!bg-[#1F1F1F] !text-gray-200 !border-none"
            height={55}
            //@ts-ignore
            ref={emailRef}
            type="email"
            placeholder="Iron@Man.com"
            width={"100%"}
          />
        </div>
        <div className="mt-7 space-y-2">
          <p>Your message</p>
          <Textarea
            rows={7}
            //@ts-ignore
            ref={messageRef}
            resize={"none"}
            placeholder="Want to know about yourself"
            className="!bg-[#1F1F1F] !text-base !text-gray-200 !border-none"
          />
        </div>
        <Button
          onClick={onSubmit}
          className="mt-7 bg-gradient-to-br !py-5 !px-12 !border-gray-500 !text-base !text-gray-200 from-[#464444] via-[#1F1F1F] to-[#1F1F1F] w-20 !rounded-full"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
