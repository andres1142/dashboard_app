"use client";
import { Component, useState } from "react";
import WidgetListModal from "./WidgetListModal";

function EmptyWidget() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [widgetInstructions, setWidgetInstructions] =
    useState<React.JSX.Element | null>(null);

  // handles the widget list modal when called from the empty widget
  function handleShowAddModal() {
    setShowAddModal(!showAddModal);
  }
  // handles the instructions modal when called from the widget list modal
  function handleShowInstructions() {
    setInstructions(null);
    setShowInstructions(!showInstructions);
  }

  function setInstructions(instructions: React.JSX.Element | null) {
    setWidgetInstructions(instructions);
    handleShowAddModal();
  }

  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-3/4 h-3/6 border-dashed border-2 border-primary_purple-100 rounded-2xl hover:cursor-pointer"
        onClick={handleShowAddModal}
      >
        <span className="text-2xl font-motivaRegular text-primary_purple animate-pulse">
          Click to Add Widget
        </span>
      </div>


      {showAddModal && (
        <WidgetListModal
          handleShowAddModal={handleShowAddModal}
          setInstructions={setInstructions}
          handleShowInstructions={handleShowInstructions}
        />
      )}

      {widgetInstructions && widgetInstructions}
    </>
  );
}

export default EmptyWidget;
