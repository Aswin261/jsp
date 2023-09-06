const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
// const body = document.querySelector("body");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  console.log("offset", leftOffset, topOffset);

  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};

// const textEl = document.getElementById("text");
// const speedEl = document.getElementById("speed");
// const text = "Double click the image to like it";
// let idx = 1;
// let speed = 300 / speedEl.value;
// write();
// function write(val) {
//   textEl.innerText = text.slice(0, idx);
//   idx++;
//   if (idx > text.length) {
//     idx = 1;
//   }
//   setTimeout(write, speed);
// }
// speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
