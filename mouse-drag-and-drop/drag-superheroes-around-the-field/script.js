document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("draggable")) {
    const target = e.target;
    const shiftX = e.clientX - target.getBoundingClientRect().left;
    const shiftY = e.clientY - target.getBoundingClientRect().top;

    target.style.position = "absolute";
    target.style.zIndex = 1000;
    document.body.appendChild(target);

    function drag(pageX, pageY) {
      // Constants to check if draggable element goes outside borders
      const newX = pageX - shiftX + target.offsetWidth;
      const newY = pageY - shiftY + target.offsetHeight;

      if (pageX - shiftX < 0) {
        target.style.left = "0px";
      }
      else if (newX >= document.documentElement.clientWidth) {
        target.style.left = document.documentElement.clientWidth - shiftX - (target.offsetWidth / 2) + "px";
      }
      else {
        target.style.left = pageX - shiftX + "px";
      }

      if (pageY - shiftY < 0) {
        target.style.top = "0px";
      }
      else if (newY >= document.documentElement.clientHeight) {
        target.style.top = document.documentElement.clientHeight - shiftY - (target.offsetHeight / 2) + "px";
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