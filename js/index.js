const body = document.querySelector("body"),
      sideBar = body.querySelector(".side-bar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = document.getElementById("search"),
      buttonActive = body.querySelector(".active");

toggle.addEventListener("click", function() {
    sideBar.classList.toggle("close");
});

toggle.addEventListener("click", function() {
    sideBar.classList.toggle("open");
});

