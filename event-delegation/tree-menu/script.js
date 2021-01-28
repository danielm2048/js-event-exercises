const tree = document.querySelector("#tree");
const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
  const span = document.createElement("span");
  span.appendChild(document.createTextNode(item.firstChild.textContent));
  item.replaceChild(span, item.firstChild);
})

tree.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "span") {
    const list = e.target.parentNode.querySelector("ul");
    if (list) {
      list.hidden = !list.hidden;
    }
  }
})