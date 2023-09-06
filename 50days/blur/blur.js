const blurry = document.querySelector(".bg");
const loading = document.querySelector(".loading-text");
let load = 0;
let fun = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(fun);
  }
  //   console.log(load);
  loading.innerText = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  blurry.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, minv, maxv, minop, maxop) => {
  return ((num - minv) * (maxop - minop)) / maxv + minop;
};

//
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
