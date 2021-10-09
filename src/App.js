import Posts from "./components/posts.js";
import React from "react";
import ImageButton from "./components/imageButton.js";

function App() {
  return (
    <div>
      <div class="banner">
        <div class="Page-title">
          <h1 class="uni">Namibia University of Science and Technology</h1>
          <h2 class="Facualty">Facualty of computing and Informatics</h2>
          <h1 class="prod">Reasearch Management System</h1>
        </div>
        <a target="_blank" href="Polytechnic_of_Namibia_logo.png"></a>
        <div class="logo">
          <img
            class="lelog"
            src={
              require("./assets/images/Polytechnic_of_Namibia_logo.png").default
            }
            alt="Logo"
          />
        </div>
      </div>

      <div class="main">
        <ul class="Posts">
          <Posts text="Research title and name of author" />
          <Posts text="Research title and name of author" />
          <Posts text="Research title and name of author" />
        </ul>
        <div></div>
      </div>

      <div class="navig"></div>

      <ImageButton />
    </div>
  );
}

export default App;
