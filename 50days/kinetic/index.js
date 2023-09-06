const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const names = document.getElementById("name");
const date = document.getElementById("date");

const animate_bg = document.querySelectorAll(".animated-bg");
const animate_bg_text = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = ` <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmslMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" 
alt="Office Space">`;
  title.innerHTML = `Office Space WFH setup`;
  excerpt.innerHTML = `Specify when the style change will happen in percent, or with the keywords "from" and "to".`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile" class="src">`;
  names.innerHTML = `John Doe`;
  date.innerHTML = `Jul 27,2023`;

  animate_bg.forEach((animated) => {
    animated.classList.remove("animated-bg");
  });
  animate_bg_text.forEach((animated) => {
    animated.classList.remove("animated-bg");
  });
}
setTimeout(getData, 2500);

//toast notification
const toasts = document.querySelector(".toasts");
const btn = document.querySelector(".btn");
const messages = ["messageOne", "messageTwo", "messageThree", "messageFour"];
btn.addEventListener("click", () => createNotification());

function createNotification(type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : generateType());
  notif.innerText = generateMessage();
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

function generateMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
const type = ["success", "info", "error"];
function generateType() {
  return type[Math.floor(Math.random() * type.length)];
}
