const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeSelected();
    // panel.classList.remove("active");
    panel.classList.add("active");
  });
});

function removeSelected() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
