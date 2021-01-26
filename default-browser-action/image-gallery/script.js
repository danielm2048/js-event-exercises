const thumbs = document.querySelector("#thumbs");
const largeImg = document.querySelector("#largeImg");

thumbs.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    const t = e.target.closest("a");
    largeImg.src = t.href;
    e.preventDefault();
  }
});