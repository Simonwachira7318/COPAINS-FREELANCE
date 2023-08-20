

// hire redirect button 
document.getElementById("hire-button").addEventListener("click", function() {
  window.location.href = "hire.html";
});

// back button 
document.getElementById("back-button").addEventListener("click", function() {
  window.location.href = "index.html";
});


// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
});
