document.addEventListener("mouseover", (e) => {
  const tooltip = e.target.dataset.tooltip;
  if (tooltip) {
    const elem = document.createElement("div");
    elem.innerHTML = tooltip;
    elem.className = "tooltip";
    elem.style.visibility = "hidden";

    e.target.appendChild(elem);

    if (elem.getBoundingClientRect().top - e.target.offsetHeight <= elem.offsetHeight) {
      elem.style.top = "100%";
    }
    else {
      elem.style.bottom = "100%";
    }

    if (window.innerWidth <= elem.offsetWidth) {
      elem.style.width = "100%";
    }
    else {
      elem.style.width = "max-content";
    }

    console.log(elem.offsetWidth);
    elem.style.visibility = "visible";
  }
});

document.addEventListener("mouseout", (e) => {
  const tooltip = e.target.dataset.tooltip;
  if (tooltip) {
    const elem = e.target.querySelector("div");
    e.target.removeChild(elem);
  }
});