const panes = document.querySelectorAll(".pane");

panes.forEach(pane => {
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "[x]";
  pane.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    pane.remove();
  })
});