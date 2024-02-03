document.addEventListener("DOMContentLoaded", (event) => {
  // Show mobile menu on hamburger button click
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle hidden class on mobile menu
  hamburger.addEventListener("click", () => {
    console.log("hola")
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("pointer-events-none");
  });

  // Hide mobile menu on click outside
  hamburger.addEventListener("blur", () => {
    mobileMenu.classList.add("hidden", "pointer-events-none");
  });

  // Show dropdown menu on profile button click
  const profileMenu = document.getElementById("profile-menu");
  const profileButton = document.getElementById("profile-button");

  profileButton.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
    profileMenu.classList.toggle("pointer-events-none");
  });

  // Hide dropdown menu on click outside
  profileButton.addEventListener("blur", () => {
    profileMenu.classList.add("hidden", "pointer-events-none");
  });
});
