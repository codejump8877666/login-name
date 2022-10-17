var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "moon.png";
    localStorage.setItem("theme", "light");
  }
};

const initIcon = () => {
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
};
window.onload = initIcon();