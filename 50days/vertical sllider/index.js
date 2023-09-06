const slideContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLength = rightSlide.querySelectorAll("div").length;
// console.log(slideLength);
let activeIndex = 0;
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;
downButton.addEventListener("click", () => changeSlide("down"));
upButton.addEventListener("click", () => changeSlide("up"));

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;
  // console.log(sliderHeight);
  if (direction === "up") {
    activeIndex++;
    if (activeIndex > slideLength - 1) {
      activeIndex = 0;
    }
  }
  if (direction === "down") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slideLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${activeIndex * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeIndex * sliderHeight}px)`;
};
