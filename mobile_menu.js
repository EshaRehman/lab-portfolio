// JavaScript code for mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".imagemenuicon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeIcon = document.querySelector(".close-icon");
    const menuLinks = document.querySelectorAll(".mobile-menu ul li a");
  
    // Show mobile menu when hamburger is clicked
    menuIcon.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
    });
  
    // Hide mobile menu when close icon is clicked
    closeIcon.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  
    // Hide mobile menu when any menu link is clicked
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      });
    });
  });
  