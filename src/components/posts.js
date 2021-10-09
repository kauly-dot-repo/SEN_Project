function Posts(props) {
  function downloadHandler() {
    console.log("Download initiated");
  }
  function viewHandler() {
    console.log("Redirecting to view page");
  }

  return (
    <div class="Post">
      <li class="thePost">
        <p>{props.text}</p>
        <button class="pbut" onClick={downloadHandler}>
          Download
        </button>
        <button class="pbut" onClick={viewHandler}>
          View
        </button>
      </li>
    </div>
  );
}

export default Posts;
