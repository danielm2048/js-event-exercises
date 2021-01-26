const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  if (e.target.className = "remove-button") {
    const pane = e.target.closest(".pane");
    pane.remove();
  }
});