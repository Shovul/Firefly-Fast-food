const slider = document.querySelector(".slider");
let isDragStart = false;

const dragStart = () => {
  isDragStart = true;
}
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();

  slider.scrollLeft = e.pageX;
}
const dragEnd = () => {
  isDragStart = false;
}


slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragEnd);