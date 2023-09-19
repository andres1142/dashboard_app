import React from "react";

function EmptyWidget() {
  return (
    <div
      className="flex justify-center items-center w-3/4 h-3/6 border-dashed border-2 border-primary_purple-100 rounded-2xl hover:cursor-pointer"
      onClick={() => alert("Working on this functionality")}
    >
      <span className="text-xl font-motivaRegular text-primary_purple">
        Click to Add Widget
      </span>
    </div>
  );
}

export default EmptyWidget;
