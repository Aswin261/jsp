const add = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));
console.log(notes);
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

add.addEventListener("click", () => addNewNote(""));

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const edit = note.querySelector(".edit");
  const del = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");
  textarea.value = text;
  main.innerHTML = text;
  //del
  del.addEventListener("click", () => {
    note.remove();
    updateLs();
  });
  //edit
  edit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });
  //toggle
  textarea.addEventListener("input", (e) => {
    const value = e.target.value;
    main.innerHTML = value;
    updateLs();
  });
  document.body.appendChild(note);
}

//
function updateLs() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
//
