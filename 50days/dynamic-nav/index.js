const open = document.getElementById("open");
const close = document.getElementById("close");
const circle = document.querySelector(".container");

open.addEventListener("click", () => {
  circle.classList.add("show-nav");
});
close.addEventListener("click", () => {
  circle.classList.remove("show-nav");
});

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
