const body = document.querySelector("body"),
      sideBar = body.querySelector(".side-bar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = document.getElementById("search"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("close");
});

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("open");
})