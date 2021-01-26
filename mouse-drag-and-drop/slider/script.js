const slider = document.querySelector(".slider");
const thumb = document.querySelector(".thumb");

thumb.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

thumb.addEventListener("mousedown", (e) => {
  e.preventDefault();

  const sliderLeft = slider.getBoundingClientRect().left;
  const sliderRight = slider.getBoundingClientRect().right;
  const shiftX = e.clientX - thumb.getBoundingClientRect().left;

  thumb.style.position = "absolute";
  thumb.style.zIndex = 1000;
  thumb.style.marginTop = "50px";

  document.body.appendChild(thumb);

  function slide(pageX) {
    if (pageX - shiftX < sliderLeft) {
      thumb.style.left = sliderLeft + "px";
    }
    else if (pageX - shiftX >= sliderRight - shiftX) {
      thumb.style.left = sliderRight - shiftX + "px";
    }
    else {
      thumb.style.left = pageX - shiftX + "px";
    }
  }

  slide(e.pageX);

  function onMouseSlide(e) {
    slide(e.pageX);
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseSlide);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseSlide);
  document.addEventListener("mouseup", onMouseUp);
});