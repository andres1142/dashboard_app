"use client";
import { useState } from "react";
import WidgetListModal from "./WidgetListModal";

function EmptyWidget() {
  const [showAddModal, setShowAddModal] = useState(false);

  function handleShowAddModal() {
    setShowAddModal(!showAddModal);
  }

  return (
    <>
      <div
        className="flex justify-center items-center w-3/4 h-3/6 border-dashed border-2 border-primary_purple-100 rounded-2xl hover:cursor-pointer"
        onClick={handleShowAddModal}
      >
        <span className="text-xl font-motivaRegular text-primary_purple">
          Click to Add Widget
        </span>
      </div>

      {showAddModal && (
        <WidgetListModal handleShowAddModal={handleShowAddModal} />
      )}
    </>
  );
}

export default EmptyWidget;
