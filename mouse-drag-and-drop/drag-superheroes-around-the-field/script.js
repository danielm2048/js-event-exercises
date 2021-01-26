document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("draggable")) {
    const target = e.target;
    const shiftX = e.clientX - target.getBoundingClientRect().left;
    const shiftY = e.clientY - target.getBoundingClientRect().top;

    target.style.position = "absolute";
    target.style.zIndex = 1000;
    document.body.appendChild(target);

    function drag(pageX, pageY) {
      if (pageX - shiftX < 0) {
        target.style.left = "0px";
      }
      else if (pageX - shiftX >= document.documentElement.clientWidth) {
        target.style.left = document.documentElement.clientWidth + "px";
      }
      else {
        target.style.left = pageX - shiftX + "px";
      }

      if (pageY - shiftY < 0) {
        target.style.top = "0px";
      }
      else if (pageY - shiftY >= document.documentElement.clientHeight) {
        target.style.top = document.documentElement.clientHeight + "px";
      }
      else {
        target.style.top = pageY - shiftY + "px";
      }
    }

    function onMouseDrag(e) {
      drag(e.pageX, e.pageY);
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseDrag)
      target.removeEventListener("mouseup", onmouseup);
    }

    document.addEventListener("mousemove", onMouseDrag);
    target.addEventListener("mouseup", onMouseUp);
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("draggable")) {
    e.preventDefault();
  }
});