document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Afficher ou masquer le bouton selon la position du scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > document.querySelector(".section1").offsetHeight) {
      scrollTopBtn.classList.add("show"); // Ajouter la classe pour afficher
    } else {
      scrollTopBtn.classList.remove("show"); // Retirer la classe pour masquer
    }
  });

  // Fonction pour revenir en haut de la page
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
