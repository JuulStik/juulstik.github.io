// select the explore button and add a click event listener
let click = 0;
const exploreButton = document.querySelector("#explore-button");

document
  .querySelector("#explore-button")
  .addEventListener("click", function () {
    // fade out the welcome-text element
    const elements = document.querySelectorAll(".welcome-sign");
    const projectsSection = document.querySelector("#projects");
    const about = document.querySelector("#about-section");
    if (click > 0) {
      document.querySelector("#about-us-section").classList.remove("fade-in");
      document.querySelector("#about-us-section").classList.add("fade-out");
      elements.forEach((element) => {
        element.classList.remove("fade-out");
      });
      setTimeout(() => {
        document.querySelector("#about-us-section").style.display = "none";
        elements.forEach((element) => {
          element.classList.remove("hidden");
        });
        elements.forEach((element) => {
          element.classList.add("fade-in");
        });
      }, 500);
      about.scrollIntoView({ behavior: "smooth", block: "center" });
      document.querySelector(
        "#explore-button"
      ).innerHTML = `Explore the world of AI<i class="fas fa-arrow-right"></i>`;
      click = 0;
    } else {
      click += 1;
      elements.forEach((element) => {
        element.classList.remove("fade-in");
      });
      elements.forEach((element) => {
        element.classList.add("fade-out");
      });
      // wait for the welcome-text element to fade out
      setTimeout(() => {
        // fade in the about-us section element
        document.querySelector("#about-us-section").style.display = "block";
        document.querySelector("#about-us-section").classList.add("fade-in");
        elements.forEach((element) => {
          element.classList.add("hidden");
        });
        document.querySelector(
          "#explore-button"
        ).innerHTML = `Join us on our journey <i class="fas fa-arrow-right"></i>`;
        document.querySelector("#explore-button").classList.add("fade-in");
      }, 500);
    }
  });

if (click > 1) {
  console.log("hello");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// function startCarousel() {
//   document.setInterval(() => {
//     // Hide the current slide
//     // Increment the current slide
//     slideIndex = plusSlides(slideIndex);

//     // Show the next slide
//     showSlides(slideIndex);
//   }, 3000);
// }

// smooth scrolling function
const navbarLinks = document.querySelectorAll("nav a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target.getAttribute("href");
    let targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Easing function for smooth scroll
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
