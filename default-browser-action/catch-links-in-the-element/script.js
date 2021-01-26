const contents = document.querySelector("#contents");

contents.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    confirm(`Are you sure you want to go into ${e.target.textContent}?`) ? true : e.preventDefault();
  }
});