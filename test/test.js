const aboutMe = document.getElementById("about-me");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    aboutMe.style.backgroundColor = "#e0e0e0";
  } else {
    aboutMe.style.backgroundColor = "#f5f5f5";
  }
});