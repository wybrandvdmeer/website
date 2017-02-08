var slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
  slideIndex++;
  showSlides(); 
}

function previousSlide() {
  slideIndex--;
  showSlides(); 
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } 

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex - 1].style.display = "block";
}