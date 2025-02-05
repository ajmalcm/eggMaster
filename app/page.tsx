
import Image from "next/image";
import Scared from "@/public/assets/scared.gif"
import Pan from "@/public/assets/pan.gif"
import Chat from "@/components/Chat";


export default function Home() {

  return (
    <div className="w-full md:w-[600px] max-w-[600px] bg-yellow-200 border-[1px] rounded-md h-[100vh] max-h-[100vh]  text-black">

    <div className="flex gap-3 items-center justify-center">
      <p className="text-sm p-2">
      "Egg Master !"
      </p>
      <Image src={Pan} alt="scared" width={75} height={75} objectFit="contain"/>
    </div>
      <Chat/>
    </div>
  );
}
