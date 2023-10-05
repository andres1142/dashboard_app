"use client";
import { useState } from "react";
import WeeklyToDoInstructions from "./WeeklyToDoInstruction";

interface WidgetListModalProps {
  setInstructions: (instructions: React.JSX.Element) => void;
  handleShowInstructions: () => void;
}

function WeeklyToDo({
  setInstructions,
  handleShowInstructions,
}: WidgetListModalProps) {
  const [showCreateModal, setShowCreateModal] = useState(false); //TODO: Remove this

  function handleShowCreateModal() {
    setInstructions(
      <WeeklyToDoInstructions handleShowInstructions={handleShowInstructions} />
    );
  }

  return (
    <>
      <button
        className="relative flex flex-wrap gap-5 justify-around items-center w-2/6 h-36 mx-2 bg-secondary_purple-200 
      rounded-xl shadow-xl overflow-hidden font-motivaLigthItalic hover:cursor-pointer "
        onClick={handleShowCreateModal}
      >
        <div
          className={`absolute -left-1 -bottom-1 ${
            showCreateModal ? "z-0" : "z-40"
          }  widget-weekly-container`}
        >
          <span className="text-lg">Monday</span>
          <div className="flex flex-col w-full">
            {/*Division*/}
            <div className="h-0.5 w-full bg-primary_purple" />
            {/*Mock Task*/}
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mt-1">
                <div className="ml-3 w-2 h-2 border-[1px] border-primary_purple rounded-full" />
                <p className="flex items-center text-[9px] font-motivaRegular">
                  Write Essay
                </p>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <div className="ml-6 w-2 h-2 border-[1px] border-primary_purple rounded-full" />
                <p className="flex items-center text-[9px] font-motivaRegular">
                  Research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute left-2 bottom-3  ${
            showCreateModal ? "z-0" : "z-30"
          } widget-weekly-container`}
        >
          <span className="widget-weekly-text">Tuesday</span>
        </div>

        <div
          className={`absolute left-5 bottom-7 ${
            showCreateModal ? "z-0" : "z-20"
          } widget-weekly-container`}
        >
          <span className="widget-weekly-text">Wednesday</span>
        </div>
      </button>
    </>
  );
}

export default WeeklyToDo;
