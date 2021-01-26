const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    const selected = document.querySelectorAll(".selected");
    if (!e.ctrlKey && !e.metaKey) {
      selected.forEach(item => {
        item.classList.toggle("selected");
      });
    }
    e.target.classList.toggle("selected");
  }
})

list.addEventListener("mousedown", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    e.preventDefault();
  }
})