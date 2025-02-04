
import Image from "next/image";
import Scared from "@/public/assets/scared.gif"
import Pan from "@/public/assets/pan.gif"
import Chat from "@/components/Chat";


export default function Home() {

  // const [d1,setD1]=useState(false);
  // const [d2,setD2]=useState(false);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setD1(true)
  //   },500)

  //   setTimeout(()=>{
  //     setD2(true);
  //   },1000)

  // },[])

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
