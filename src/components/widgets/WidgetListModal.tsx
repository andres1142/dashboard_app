import React from "react";
import Link from "next/link";
import WeeklyToDo from "./items/WeeklyToDo";
import Modal from "./common/Modal";

interface WidgetListModalProps {
  handleShowAddModal: () => void;
}

function WidgetListModal({ handleShowAddModal }: WidgetListModalProps) {
  return (
    <Modal z_level={"z-10"}>
      <div className="flex flex-wrap justify-center gap-x-10 h-full w-full relative  pb-20 pt-10">
        {/*Close Button*/}
        <WeeklyToDo />
        <button
          onClick={handleShowAddModal}
          className="absolute bottom-5 right-5 form-button w-24"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default WidgetListModal;
