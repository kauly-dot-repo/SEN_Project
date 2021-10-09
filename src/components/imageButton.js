import Modal from "./Modal";
import Backdrop from "./backdrop";
import { useState } from "react";

function ImageButton() {
  const [showModal, setModal] = useState(false);

  function Uploading() {
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
  }
  return (
    <div>
      <button onClick={Uploading}>
        <img
          class="UpBut"
          src={require("../assets/images/adddoc.png").default}
          alt="upload button"
        />
      </button>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default ImageButton;
