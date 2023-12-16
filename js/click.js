const iconHamburger = document.querySelector(".icon-hamburger");
const toggleHamburgerIcon = document.querySelector(".toggle-icon-hamburger");
const menu = document.querySelector(".menu");
const menu2 = document.querySelector(".menu-2");
const menuLinks = menu.querySelectorAll("a"); // Alle links binnen het menu ophalen
const productButton = document.querySelector(".product");
const productMenu = document.querySelector(".product-menu");
const companyButton = document.querySelector(".company");
const companyMenu = document.querySelector(".company-menu");
const connectButton = document.querySelector(".connect");
const connectMenu = document.querySelector(".connect-menu");
const iconArrowProduct = document.querySelector(".icon-arrow-product");
const iconArrowCompany = document.querySelector(".icon-arrow-company");
const iconArrowConnect = document.querySelector(".icon-arrow-connect");

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

function hideAllIcons(exceptIcons) {
  const allIcons = document.querySelectorAll(
    ".icon-arrow-product, .icon-arrow-company, .icon-arrow-connect"
  );
  allIcons.forEach((icon) => {
    if (icon !== exceptIcons) {
      icon.style.transform = "rotate(360deg)";
    }
  });
}

productButton.addEventListener("click", function () {
  if (
    productMenu.style.display === "none" ||
    productMenu.style.display === ""
  ) {
    hideAllMenus(productMenu);
    hideAllIcons(iconArrowProduct);
    productMenu.style.display = "flex";
    menu.style.height = "500px";
    menu2.style.top = "350px";
    iconArrowProduct.style.transform = `rotate(180deg)`;
  } else {
    productMenu.style.display = "none";
    menu.style.height = "300px";
    menu2.style.top = "170px";
    iconArrowProduct.style.transform = `rotate(360deg)`;
  }
});

companyButton.addEventListener("click", function () {
  if (
    companyMenu.style.display === "none" ||
    companyMenu.style.display === ""
  ) {
    hideAllMenus(companyMenu);
    hideAllIcons(iconArrowCompany);
    companyMenu.style.display = "flex";
    menu.style.height = "500px";
    menu2.style.top = "350px";
    iconArrowCompany.style.transform = `rotate(180deg)`;
  } else {
    companyMenu.style.display = "none";
    menu.style.height = "300px";
    menu2.style.top = "170px";
    iconArrowCompany.style.transform = `rotate(360deg)`;
  }
});

connectButton.addEventListener("click", function () {
  if (
    connectMenu.style.display === "none" ||
    connectMenu.style.display === ""
  ) {
    hideAllMenus(connectMenu);
    hideAllIcons(iconArrowConnect);
    connectMenu.style.display = "flex";
    menu.style.height = "500px";
    menu2.style.top = "350px";
    iconArrowConnect.style.transform = `rotate(180deg)`;
  } else {
    connectMenu.style.display = "none";
    menu.style.height = "300px";
    menu2.style.top = "170px";
    iconArrowConnect.style.transform = `rotate(360deg)`;
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
    menu.style.height = "300px";
    menu2.style.top = "170px";
  } else {
    // Anders open het menu
    menu.classList.add("menu-open");
    toggleHamburgerIcon.src = "images/icon-close.svg";
    productMenu.style.display = "none";
    companyMenu.style.display = "none";
    connectMenu.style.display = "none";
    menu.style.height = "300px";
    menu2.style.top = "170px";
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
    // productMenu.style.display = "none";
    // companyMenu.style.display = "none";
    // connectMenu.style.display = "none";
    // menu.classList.remove("menu-open");
    // menu.classList.add("menu");
  }
});
