import loadHome from "./modules/home.js";
import loadContact from "./modules/contact.js";
import { loadTab, handleActiveState } from "./utils/utils.js";

import "./styles/styles.css";

const navButtons = document.querySelectorAll(".navButtons");
navButtons.forEach(nav => {
    nav.addEventListener("click", () => {
        handleActiveState(navButtons, nav, "activeNav");
    });
});

document.querySelector("#homeButton").addEventListener("click", () => loadTab(loadHome));
document.querySelector("#contactButton").addEventListener("click", () => loadTab(loadContact));

loadTab(loadHome);