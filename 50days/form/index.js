const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
// const button = document.querySelectory(".btn");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSong();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopSong() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

//joke
const jokes = document.querySelector("#joke");
const button = document.querySelector("#next");
button.addEventListener("click", generateJoke);
generateJoke();
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokes.innerHTML = data.joke;
  //   .then((res) => res.json())
  //   .then((data) => {
  //     jokes.innerHTML = data.joke;
  //   });
}

const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});
