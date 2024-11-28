// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Call-to-Action Button Click Event
  document.getElementById("ctaButton").addEventListener("click", () => {
    alert("Obrigado pelo interesse! Nossa equipe entrará em contato em breve. 🚀");
  });
  