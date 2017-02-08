var slideIndex = 1;
var showContent = true;

function hideContent() {
    var content = document.getElementsByClassName("content")[0];
    var up = document.getElementsByClassName("button-up")[0];
    var down = document.getElementsByClassName("button-down")[0];
   
    showContent = !showContent;

    if(showContent) {
      content.style.display = "block";
      down.style.display = "block";
      up.style.display = "none";
    } else {
      content.style.display = "none";
      down.style.display = "none";
      up.style.display = "block";
    }
}

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