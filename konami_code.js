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
let index = 0;
function init() {
  // your code here
  document.body.addEventListener("keydown", function (e) {
    if (e.key === codes[index]) {
      index++;
      if (index == codes.length) {
        alert("hey!")
      }
    } else {
      index = 0;
    }
  });
}