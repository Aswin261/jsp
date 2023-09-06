const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerText = "Dark mode";
    toggleEl.classList.add("active");
    // toggleEl.style.transform = `translateX(100%)`;
  } else {
    html.classList.add("dark");
    e.target.innerText = "Light mode";
    toggleEl.classList.remove("active");
    // toggleEl.style.transform = `translateX(0%)`;
  }
});
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const clockFormat = hours % 12;
  meridian = hours >= 12 ? "PM" : "AM";
  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    clockFormat,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerText = `${clockFormat}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${meridian}`;
  dateEl.innerHTML = `${days[day]},${months[month]} <span class='circle'>${date}</span>`;
}

const scale = (num, minv, maxv, minop, maxop) => {
  return ((num - minv) * (maxop - minop)) / maxv + minop;
};
setInterval(setTime, 1000);
