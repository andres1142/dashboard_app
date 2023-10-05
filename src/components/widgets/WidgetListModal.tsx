import WeeklyToDo from "./items/WeeklyTodoWidget/WeeklyToDo";
import BlurBackground from "./common/BlurBackground";

interface WidgetListModalProps {
  handleShowAddModal: () => void;
  setInstructions: (instructions: React.JSX.Element) => void;
  handleShowInstructions: () => void;
}

function WidgetListModal({
  handleShowAddModal,
  setInstructions,
  handleShowInstructions,
}: WidgetListModalProps) {
  return (
    <BlurBackground>
      {/*Modal Container*/}
      <div className="w-1/2 inline-block bg-secondary_purple rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all delay-1000">
        <div className="flex flex-wrap justify-center gap-x-10 h-full w-full relative  pb-20 pt-10">
          {/*Close Button*/}
          <WeeklyToDo
            setInstructions={setInstructions}
            handleShowInstructions={handleShowInstructions}
          />
          <button
            onClick={handleShowAddModal}
            className="absolute bottom-5 right-5 form-button w-24"
          >
            Cancel
          </button>
        </div>
      </div>
    </BlurBackground>
  );
}

export default WidgetListModal;
