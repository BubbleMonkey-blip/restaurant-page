import { homePage } from './homePage';

const pageLoader = () => {
    let navBar = document.createElement("div");
    navBar.id = "navBar";
    document.body.prepend(navBar);    

    let pageTitle = document.createElement("h1");
    pageTitle.id = "pageTitle";
    pageTitle.innerText = "Levi's Pizzeria";
    document.body.prepend(pageTitle);

    let homeButton = document.createElement("div");
    homeButton.className = "navButton";
    homeButton.id = "homeButton";
    homeButton.innerText = "Home";
    navBar.appendChild(homeButton);

    let menuButton = document.createElement("div");
    menuButton.className = "navButton";
    menuButton.id = "menuButton";
    menuButton.innerText = "Menu";
    navBar.appendChild(menuButton);

    let contactButton = document.createElement("div");
    contactButton.className = "navButton";
    contactButton.id = "contactButton";
    contactButton.innerText = "Contact";
    navBar.appendChild(contactButton);

    homePage();
};

export { pageLoader }