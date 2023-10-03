import React from "react";
import BlurBackground from "./BlurBackground";

interface InstructionsProps {
  widgetInstructions: React.JSX.Element;
  handleShowInstructions: () => void;
}

function InstructionsContainer({ widgetInstructions, handleShowInstructions }: InstructionsProps) {
  return (
    <BlurBackground>
      {/*Modal Container*/}
      <div className="w-1/2 inline-block bg-secondary_purple rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all delay-1000">
        <div className="flex flex-wrap justify-center gap-x-10 h-full w-full relative  pb-20 pt-10">
          {
            /*Instructions*/
            widgetInstructions
          }
          {/*Close Button*/}
          <button
            className="absolute bottom-5 right-5 form-button w-24"
            onClick={handleShowInstructions}
          >
            Cancel
          </button>
        </div>
      </div>
    </BlurBackground>
  );
}

export default InstructionsContainer;
