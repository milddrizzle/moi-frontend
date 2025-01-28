import { useState } from "react";
import AnimatedText from "./animated_text";

type AnimatedListProps = {
  items: string[];
};

const AnimatedList = ({ items }: AnimatedListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 font-sub self-start">
      {items.map((item, index) => (
        <div key={index}>
          {index < currentIndex ? (
            // Completed items are displayed as plain text
            <p className="font-sub text-left font-extralight">- {item}</p>
          ) : index === currentIndex ? (
            // The current item is animated
            <AnimatedText
              text={item}
              onComplete={() => {
                if (currentIndex < items.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                }
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
