showSlides(0);
showContent();

function getSlideIndex() {
  if(sessionStorage.slideIndex === undefined) {
    sessionStorage.slideIndex = 1;
  }
  return parseInt(sessionStorage.slideIndex);
}

function setSlideIndex(slideIndex) {
  sessionStorage.slideIndex = slideIndex;
}

function getShowContent() {
  if(sessionStorage.showContent === undefined) {
    sessionStorage.showContent = true;
  }
  return sessionStorage.showContent === 'true';
}

function setShowContent(showContent) {
  sessionStorage.showContent = showContent;
}

function showContent() {
    var content = document.getElementsByClassName("content")[0];
    var up = document.getElementsByClassName("button-up")[0];
    var down = document.getElementsByClassName("button-down")[0];
    var showContent = getShowContent();
   
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

function hideContent() {
    var shwContent = getShowContent();
    setShowContent(!shwContent);
    showContent();
}

function nextSlide() {
  showSlides(1); 
}

function previousSlide() {
  showSlides(-1); 
}

function showSlides(delta) {
  var slides = document.getElementsByClassName("slide");

  var slideIndex = getSlideIndex();

  slideIndex += delta;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } 

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex - 1].style.display = "block";

  setSlideIndex(slideIndex);
}