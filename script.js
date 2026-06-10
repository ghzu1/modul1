const menuButton = document.getElementById("menu-btn");
const menuList = document.querySelector("nav ul");
const stylePicker = document.getElementById("style-picker");

menuButton.addEventListener("click", function () {
  menuList.classList.toggle("open");
});

stylePicker.addEventListener("change", function () {
  document.body.className = stylePicker.value;
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    menuList.classList.add("open");
  } else {
    menuList.classList.remove("open");
  }
});