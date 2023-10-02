/* /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/script/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

/* Hover effect */
const socialIcons = document.querySelectorAll(".social-icons i");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("fa-beat");
  });

  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("fa-beat");
  });
});

const backToTopButton = document.getElementById("backToTop")

backToTopButton.onclick = () =>
  document.documentElement.scroll({
    top: 0,
    behavior: "smooth"
  });

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.hidden = false;
  } else {
    backToTopButton.hidden = true;
  }
};

