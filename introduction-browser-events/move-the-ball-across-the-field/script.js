const field = document.getElementById("field");
const fieldStyle = window.getComputedStyle(field);
const ball = document.getElementById("ball");

const fieldCoordinates = field.getBoundingClientRect();
const fieldHeight = field.clientHeight;
const fieldWidth = field.clientWidth;
const ballHeight = ball.offsetHeight;
const ballWidth = ball.offsetWidth;

field.addEventListener("click", (e) => {
  let mouseX = e.clientX - fieldCoordinates.left - field.clientLeft - (ballWidth / 2);
  let mouseY = e.clientY - fieldCoordinates.top - field.clientTop - (ballHeight / 2);

  if (mouseX < 0) {
    mouseX = 0;
  }
  if (mouseX + ballWidth > fieldWidth) {
    mouseX = fieldWidth - ballWidth;
  }
  if (mouseY < 0) {
    mouseY = 0;
  }
  if (mouseY + ballHeight > fieldHeight) {
    mouseY = fieldHeight - ballHeight;
  }

  ball.style.top = mouseY + "px";
  ball.style.left = mouseX + "px";
  ball.classList.toggle("clicked");
});