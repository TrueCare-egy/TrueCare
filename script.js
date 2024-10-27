    let slideIndex = 0;
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

document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector(".animated-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.5 }); // التأثير يظهر عند الوصول إلى منتصف العنصر

  observer.observe(animatedText);
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector(".animated1-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.5 }); // التأثير يظهر عند الوصول إلى منتصف العنصر

  observer.observe(animatedText);
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector(".animated-xray");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.5 }); // التأثير يظهر عند الوصول إلى منتصف العنصر

  observer.observe(animatedText);
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedImage = document.querySelector(".animated-xray1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.5 }); // التأثير يحدث عند الوصول إلى منتصف العنصر تقريباً

  observer.observe(animatedImage);
});