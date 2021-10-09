function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function uploadHandler() {
    props.onConfirm();
  }
  return (
    <div className="upload">
      <h1>Content to be entered</h1>
      <button class="upbut" onClick={uploadHandler}>
        upload
      </button>
      <button class="upbut" onClick={cancelHandler}>
        cancel
      </button>
    </div>
  );
}

export default Modal;
