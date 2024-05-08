const mobileLinks = document.querySelector("#mobile-links");
const collapseBtn = document.querySelector("#collapseBtn");

collapseBtn.addEventListener("click", () => {
  mobileLinks.style.height = mobileLinks.clientHeight ? 0 : "260px";
});
