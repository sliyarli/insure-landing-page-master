document.addEventListener("DOMContentLoaded", () => {
  const mobileLinks = document.querySelector("#mobile-links");
  const collapseBtn = document.querySelector("#collapseBtn");
  const btnImage = document.querySelector("#collapseBtn img");
  const headerImg = document.querySelector(".header-image");

  collapseBtn.addEventListener("click", () => {
    const isClosed =
      mobileLinks.style.height === "0px" || mobileLinks.style.height === "";
    if (isClosed) {
      const headerImgHeight = window.getComputedStyle(headerImg).height;
      mobileLinks.style.height = headerImgHeight;
      btnImage.src = "./images/icon-close.svg";
    } else {
      mobileLinks.style.height = "0px";
      btnImage.src = "./images/icon-hamburger.svg";
    }
  });

  window.addEventListener("resize", () => {
    if (mobileLinks.style.height !== "0px" && mobileLinks.style.height !== "") {
      const headerImgHeight = window.getComputedStyle(headerImg).height;
      mobileLinks.style.height = headerImgHeight;
    }

    if (window.innerWidth > 991.98) {
      mobileLinks.style.height = "0px";
      btnImage.src = "./images/icon-hamburger.svg";
    }
  });
});
