document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation
    const heroSubtitle = document.getElementById("hero-subtitle");
    const subtitleText = "I'm a passionate developer";
    let index = 0;
    let typingInterval;
  
    function typeText() {
      if (index < subtitleText.length) {
        heroSubtitle.textContent += subtitleText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }
  
    // Start the typing animation
    typingInterval = setInterval(typeText, 100);
  
    // Smooth Scrolling for CTA Button
    const ctaBtn = document.getElementById("cta-btn");
    ctaBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      const target = document.getElementById("about");
      
      // Scroll smoothly to the "about" section
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  
    // Fade-in Effect on Scroll
    const heroSection = document.getElementById("hero");
    window.addEventListener("scroll", function () {
      const windowHeight = window.innerHeight;
      const heroTop = heroSection.getBoundingClientRect().top;
  
      // If the hero section is within view, fade in the content
      if (heroTop <= windowHeight * 0.8) {
        document.querySelector(".hero-container").style.opacity = 1;
      }
    });
  });
  