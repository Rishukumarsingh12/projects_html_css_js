
const slides = document.querySelectorAll(".slides img")
let slideindex = 0;
let intervalId = null;
console.log(slides)
document.addEventListener("DOMContentLoaded", initializesSlider);

function initializesSlider(){
    if(slides.length>0){
        slides[slideindex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000);
    }
   
}

function showSlide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;
    }
      
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
      });
    slides[slideindex].classList.add("displaySlide");
}

function preSlide(){
    clearInterval(intervalId);
    slideindex--;
    showSlide(slideindex);

}

function nextSlide(){
    slideindex++;
    showSlide(slideindex);
   
}