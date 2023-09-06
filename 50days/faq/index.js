toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

const tagEl = document.querySelector(".tags");
const text = document.getElementById("textarea");
// const tag = document.getElementsByClassName("tag");

text.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(tags);
  tagEl.innerHTML = "";
  tags.forEach((stag) => {
    const spantag = document.createElement("span");
    spantag.classList.add("tag");
    spantag.innerText = stag;
    tagEl.appendChild(spantag);
  });
}
//function randomSelect
function randomSelect() {
  const time = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    // console.log(randomTag);
    highlight(randomTag);

    setTimeout(() => {
      unhighlight(randomTag);
    }, 100);
  }, 100);
  //
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const tag = pickRandomTag();
      highlight(tag);
    }, 100);
  }, time * 100);
}
//
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function highlight(tag) {
  tag.classList.add("highlight");
}
function unhighlight(tag) {
  tag.classList.remove("highlight");
}
