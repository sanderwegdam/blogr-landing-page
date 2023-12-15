const iconHamburger = document.querySelector(".icon-hamburger");
const toggleHamburgerIcon = document.querySelector(".toggle-icon-hamburger");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a"); // Alle links binnen het menu ophalen
const productButton = document.querySelector(".product");
const productMenu = document.querySelector(".product-menu");
const companyButton = document.querySelector(".company");
const companyMenu = document.querySelector(".company-menu");
const connectButton = document.querySelector(".connect");
const connectMenu = document.querySelector(".connect-menu");

productButton.addEventListener("click", function () {
  if (
    productMenu.style.display === "none" ||
    productMenu.style.display === ""
  ) {
    hideAllMenus(productMenu);
    productMenu.style.display = "flex";
  } else {
    productMenu.style.display = "none";
  }
});

companyButton.addEventListener("click", function () {
  if (
    companyMenu.style.display === "none" ||
    companyMenu.style.display === ""
  ) {
    hideAllMenus(companyMenu);
    companyMenu.style.display = "flex";
  } else {
    companyMenu.style.display = "none";
  }
});

connectButton.addEventListener("click", function () {
  if (
    connectMenu.style.display === "none" ||
    connectMenu.style.display === ""
  ) {
    hideAllMenus(connectMenu);
    connectMenu.style.display = "flex";
  } else {
    connectMenu.style.display = "none";
  }
});

iconHamburger.addEventListener("click", function (e) {
  e.preventDefault();

  if (menu.classList.contains("menu-open")) {
    // Als het menu al open is, sluit het
    menu.classList.remove("menu-open");
    menu.classList.add("menu");
    toggleHamburgerIcon.src = "images/icon-hamburger.svg";
    productMenu.style.display = "none";
    companyMenu.style.display = "none";
    connectMenu.style.display = "none";
  } else {
    // Anders open het menu
    menu.classList.add("menu-open");
    toggleHamburgerIcon.src = "images/icon-close.svg";
    productMenu.style.display = "none";
    companyMenu.style.display = "none";
    connectMenu.style.display = "none";
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
    productMenu.style.display = "none";
    companyMenu.style.display = "none";
    connectMenu.style.display = "none";
    menu.classList.remove("menu-open");
    menu.classList.add("menu");
  }
});

// Functie om alle menu's te verbergen behalve het opgegeven menu
function hideAllMenus(exceptMenu) {
  const allMenus = document.querySelectorAll(
    ".product-menu, .company-menu, .connect-menu"
  );
  allMenus.forEach((menu) => {
    if (menu !== exceptMenu) {
      menu.style.display = "none";
    }
  });
}
