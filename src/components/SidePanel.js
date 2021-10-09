function SidePanel() {
  return (
    <a href="#" class="Menu-Item">
      <span className="icon-button">{}</span>
    </a>
  );
  function SidePanelItems(props) {}

  return (
    <div class="side-panel">
      <div class="ava">
        <img
          class="avatar"
          src={require("./assets/images/avatar.png").default}
          alt="avatar"
        />
      </div>
      <div class="side_nav">
        <ul class="sd_nav">
          <li class="nv">
            <a href="#Post">Post</a>
          </li>
          <li class="nv">
            <a href="#Saved">Saved</a>
          </li>
          <li class="nv">
            <a href="#Settings">Settings</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="Username">UserName</h4>
      </div>
      <a target="_blank" href="avatar.png"></a>
    </div>
  );
}

export default SidePanel;
