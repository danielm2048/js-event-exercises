const clickMe = document.querySelector("#click");
const list = document.querySelector("ul");
const openSpan = document.querySelector("#open");
const closeSpan = document.querySelector("#close");

list.hidden = true;
openSpan.hidden = false;
closeSpan.hidden = true;

clickMe.addEventListener("click", () => {
  list.hidden = !list.hidden;
  openSpan.hidden = !openSpan.hidden;
  closeSpan.hidden = !closeSpan.hidden;
});