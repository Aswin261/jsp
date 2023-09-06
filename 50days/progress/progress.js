const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
//prev
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
      console.log("incremented", index, circle);
    } else {
      circle.classList.remove("active");
      console.log("decremented", index);
    }
  });
  const active = document.querySelectorAll(".active");
  // console.log(active.length);
  progress.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

const clicks = document.querySelectorAll(".r-btn");
clicks.forEach((click) => {
  click.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;
    // console.log(top, left);

    const xinside = x - left;
    const yinside = y - top;
    console.log(xinside, yinside);

    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.top = yinside + "px";
    circle.style.left = xinside + "px";
    this.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
