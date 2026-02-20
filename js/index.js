const body = document.querySelector("body"),
      sideBar = body.querySelector(".side-bar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = document.getElementById("search"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      buttonActive = body.querySelector(".active");

modeSwitch.addEventListener("click", function() {
    body.classList.toggle("dark");
});

toggle.addEventListener("click", function() {
    sideBar.classList.toggle("close");
});

toggle.addEventListener("click", function() {
    sideBar.classList.toggle("open");
});

buttonActive.addEventListener("click", function() {
    body.classList.toggle("selected");
});

