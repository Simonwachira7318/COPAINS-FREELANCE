//interactivity 

var header = document.querySelector("header");
var button = document.querySelector("button");

button.addEventListener("click", function() {
  header.classList.toggle("active");
});
