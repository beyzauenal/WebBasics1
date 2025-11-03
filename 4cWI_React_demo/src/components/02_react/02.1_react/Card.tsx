import { useState } from "react";

type Props = {
  name: string;
  description: string;
};

export default function Card({ name, description }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [amountOfClicks, setAmountOfClicks] = useState(0);

  const bgClass = isActive ? "bg-green-400" : "bg-white";

  return (
    <div
      className={`border p-4 hover:cursor-pointer ${bgClass}`}
      onClick={() => setIsActive(true)}
    >
      <h1 className="font-extrabold text-2xl">Hello {name}!</h1>
      <p>{description}</p>

      {}
      <div
        className="mt-2 underline cursor-pointer w-max"
        onClick={(e) => {
          e.stopPropagation(); 
          setAmountOfClicks((prev) => prev + 1);
        }}
      >
        Amount of clicks: {amountOfClicks}
      </div>
    </div>
  );
}
