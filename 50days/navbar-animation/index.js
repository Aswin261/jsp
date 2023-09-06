const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//
const counter = document.querySelectorAll(".counter");
// const dt=document.querySelectorAll('data-target');

counter.forEach((count) => {
  count.innerText = 0;
  const updateCounter = () => {
    const target = +count.getAttribute("data-target");
    // console.log(typeof target, target);
    const c = +count.innerText;
    const increment = target / 200;
    // console.log(typeof c);
    if (c < target) {
      count.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      count.innerText = target;
      //   console.log(typeof count.innerText);
    }
  };
  updateCounter();
});
