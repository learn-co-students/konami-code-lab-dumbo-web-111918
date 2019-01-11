const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
const pressedArray = [];

function init() {
  document.body.addEventListener("keydown", (event) => {

    pressedArray.splice(-codes.length, pressedArray.length - codes.length);

    pressedArray.push(event.key);
    if(pressedArray.join('') === codes.join('')){
      alert("You've uncovered the Hidden Temple!");
    }
  });
}
