import { pageLoader } from './pageLoader';
import { homePage } from './homePage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

pageLoader();

const wipeContent = () => {
    document.getElementById("content").innerHTML = "";
}

document.getElementById("contactButton").addEventListener("click", () => {
    wipeContent(); 
    contactPage();
});

document.getElementById("menuButton").addEventListener("click", () => { 
    wipeContent();
    menuPage();
});

document.getElementById("homeButton").addEventListener("click", () => {
    wipeContent();
    homePage();
});
