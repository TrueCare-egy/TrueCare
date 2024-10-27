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


        
 function sendLocation1() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text= يمحتاج خدمه تمريضيه داخل محافظات القاهره الكبري: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation2() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=محتاج مساعد تمريض لرعايه منزليه: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation3() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=محتاج خدمه تمريضيه داخل محافظه القاهره: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation4() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=محتاج فني تمريض لرعايه منزليه: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation5() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=أحتاج أخصائي تمريض لرعايه منزليه: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation6() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=محتاج أخصائي تمريض لاخذ العلاج واحتاج خدمه توصيل العلاج المجانيه: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}
function sendLocation7() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=محتاج أخصائي تمريض لسحب عينات دم وتحاليل بالمزل: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}

function sendLocation8() {
    if (lat && lng) {
        // رابط إرسال الإحداثيات إلى واتساب
       var whatsappLink = "https://wa.me/201285421585?text=احتاج  القيام بحجز فحص او أشعه في المنزل: https://www.google.com/maps?q=" + lat + "," + lng;


        // فتح الرابط في نافذة جديدة
        window.open(whatsappLink, '_blank');
    } else {
        alert("لم يتم تحديد موقعك بعد.");
    }
}