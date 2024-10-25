﻿    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dots")[0].getElementsByTagName("span");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";

        setTimeout(showSlides, 5000); // 
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides();
}


  