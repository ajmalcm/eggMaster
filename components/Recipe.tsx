"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Runny from "@/public/assets/runny-removebg-preview.png";
import Soft from "@/public/assets/soft-removebg-preview.png";
import Hard from "@/public/assets/hardegg-removebg-preview.png";
import Over from "@/public/assets/overcokkedegg-removebg-preview.png";

const Recipe = ({ type }: { type: string }) => {
  const [instructions, setInstructions] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [icon,setIcon]=useState<string | any>();

  const eggBoilingGuide = [
    {
      type: "runny",
      title: "Runny Yolk",
      time: "4-5 minutes",
      icon:Runny,
      description: "Soft and wobbly yolk, perfect for dipping toast or ramen.",
      instructions: [
        "Bring water to a rolling boil.",
        "Gently lower eggs into boiling water.",
        "Boil for 4-5 minutes.",
        "Transfer to an ice bath immediately to stop cooking.",
        "Peel and enjoy with toast or drizzle over dishes.",
      ],
    },
    {
      type: "soft",
      title: "Soft-Boiled",
      time: "6-7 minutes",
      icon:Soft,
      description:
        "Slightly set whites with a jammy center, ideal for ramen and salads.",
      instructions: [
        "Bring water to a rolling boil.",
        "Carefully place eggs in boiling water.",
        "Boil for 6-7 minutes.",
        "Place in an ice bath for a couple of minutes before peeling.",
        "Enjoy in ramen, salads, or on toast.",
      ],
    },
    {
      type: "hard",
      title: "Hard-Boiled",
      time: "9-12 minutes",
      icon:Hard,
      description:
        "Firm whites and fully set yolk, great for meal prep or deviled eggs.",
      instructions: [
        "Bring water to a rolling boil.",
        "Add eggs gently and boil for 9-12 minutes.",
        "Immediately place eggs in an ice bath for at least 5 minutes.",
        "Peel under running water for easy removal.",
        "Use for salads, meal prep, or snacks.",
      ],
    },
    {
      type: "overcooked",
      title: "Overcooked",
      time: "14+ minutes",
      icon:Over,
      description:
        "Dry, chalky yolk with a greenish-gray tint. You’ve gone too far.",
      instructions: [
        "Bring water to a rolling boil.",
        "Add eggs gently and boil for 9-12 minutes.",
        "Boil eggs for 14+ minutes while contemplating your life choices.",
        "Notice the yolk turning dry and crumbly.",
        "Accept that your egg is now best suited for sad sandwiches or as an example of what *not* to do.",
      ],
    },
  ];

  useEffect(() => {
    const selectedEgg = eggBoilingGuide.find((egg) => egg.type === type);
    if (selectedEgg) {
      setInstructions(selectedEgg.instructions);
      setTitle(selectedEgg.title);
      setTime(selectedEgg.time);
      setIcon(selectedEgg.icon);
    }
  }, [type]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-6 font-pixel_p2 text-xs">
        <div className=" flex justify-center items-center gap-8">
      <h2 className="text-xs font-bold text-center mb-2">{title}</h2>
    <Image src={icon || Runny} alt="type" width={50} height={50} objectFit="contain"/>
        </div>
      <p className="text-gray-600 text-center mb-4">{time}</p>
      <ul className="space-y-3">
        {instructions.map((step, i) => (
          <li key={i} className="flex gap-2 items-start font-fredoka text-xl">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              {i + 1}
            </span>
            <p className="text-gray-800">{step}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
