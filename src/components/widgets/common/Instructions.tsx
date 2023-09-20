import React from "react";
import Modal from "./Modal";

function Instructions() {
  return (
    <Modal z_level="z_20">
      <div className="h-full w-full ">
        {/*Close Button*/}
        <button className="absolute bottom-5 right-5 form-button w-24">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default Instructions;
