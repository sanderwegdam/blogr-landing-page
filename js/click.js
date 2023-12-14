const iconHamburger = document.querySelector(".icon-hamburger");
const toggleHamburgerIcon = document.querySelector(".toggle-icon-hamburger");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a"); // Alle links binnen het menu ophalen

iconHamburger.addEventListener("click", function (e) {
  e.preventDefault();

  if (menu.classList.contains("menu-open")) {
    // Als het menu al open is, sluit het
    menu.classList.remove("menu-open");
    menu.classList.add("menu");
    toggleHamburgerIcon.src = "images/icon-hamburger.svg";
  } else {
    // Anders open het menu
    menu.classList.add("menu-open");
    toggleHamburgerIcon.src = "images/icon-close.svg";
  }
});

// Event listeners toevoegen aan de links binnen het menu
menuLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault(); // Voorkom standaardgedrag van de link
    menu.classList.remove("menu-open");
    menu.classList.add("menu");
  });
});

// Event listener toevoegen aan het document om klikken buiten het menu te detecteren
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !iconHamburger.contains(e.target)) {
    // Als er buiten het menu en buiten het hamburgerpictogram wordt geklikt
    menu.classList.remove("menu-open");
    menu.classList.add("menu");
  }
});
