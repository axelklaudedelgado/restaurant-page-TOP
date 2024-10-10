import Flickity from "flickity";
import "flickity/css/flickity.css";
import imagesLoaded from "imagesloaded";

import loadTab from "../utils/tabLoader.js";
import loadContact from "./contact.js"; 

export default function loadHome() {
    const content = document.createElement("div");

    const slideshowContent = document.createElement("div");
    slideshowContent.classList.add("slideshowContent");

    const foodCategories = document.createElement("div");
    foodCategories.classList.add("foodCategories");

    const categories = [
        { img: require("../assets/images/wings.png"), alt: "Chicken Wings Item", label: "Wings" },
        { img: require("../assets/images/streetFood.png"), alt: "Street Food Item", label: "Street Foods" },
        { img: require("../assets/images/mojos.png"), alt: "Other Item", label: "Other Items" },
        { img: require("../assets/images/platter.png"), alt: "Platter Item", label: "Platters" }
    ];

    categories.forEach(category => {
        const button = document.createElement("button");
        button.classList.add("category");

        const img = document.createElement("img");
        img.src = category.img;
        img.alt = category.alt;

        button.appendChild(img);
        button.appendChild(document.createTextNode(category.label));
        foodCategories.appendChild(button);
    });

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const carouselCells = [
        { img: require("../assets/images/garlicParmesan.png"), alt: "Garlic Parmesan Chicken Wings Offer"},
        { img: require("../assets/images/spicyBuffalo.png"), alt: "Spicy Buffalo Chicken Wings Offer"},
        { img: require("../assets/images/honeyButter.png"), alt: "Honey Butter Chicken Wings Offer"},
        { img: require("../assets/images/soyGarlic.png"), alt: "Soy Garlic Chicken Wings Offer"}
    ];

    carouselCells.forEach(cell => {
        const carouselCell = document.createElement("div");
        carouselCell.classList.add("carousel-cell");
        
        const img = document.createElement("img");
        img.classList.add("slideshowImage");
        img.src = cell.img;
        img.alt = cell.alt;

        carouselCell.appendChild(img);
        carousel.appendChild(carouselCell);
    });

    slideshowContent.appendChild(foodCategories);
    slideshowContent.appendChild(carousel);

    imagesLoaded(carousel, () => {
        const flkty = new Flickity(carousel, {
            wrapAround: true,
            autoPlay: true,
        });
    });

    const featuredItems = document.createElement("div");
    featuredItems.classList.add("featuredItems");

    const featuredHeader = document.createElement("h1");
    featuredHeader.textContent = "Featured Items";  

    const foodItems = document.createElement("div");
    foodItems.classList.add("foodItems");

    const items = [
        { img: require("../assets/images/balut.png"), alt: "Sizzling Balut", description: "Juicy and flavorful Filipino delicacy, served sizzling hot!"},
        { img: require("../assets/images/mojos.png"), alt: "Mojos", description: "Golden, crispy, potato perfection"},
        { img: require("../assets/images/tofu.png"), alt: "Sizzling Tofu", description: "Savory tofu, oyster-flavored bliss!"}
    ];

    items.forEach(item => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("foodItem");

        const itemText = document.createElement("div");
        itemText.classList.add("itemText");

        const itemTitle = document.createElement("h1");
        const itemDescription = document.createElement("h3");
        itemTitle.textContent = item.alt;
        itemDescription.textContent = item.description;

        itemText.appendChild(itemTitle);
        itemText.appendChild(itemDescription);

        const img = document.createElement("img");
        img.classList.add("itemImage");
        img.src = item.img;
        img.alt = item.alt;

        foodItem.appendChild(itemText);
        foodItem.appendChild(img);

        foodItems.appendChild(foodItem);
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    menuButton.textContent = "View Menu";

    featuredItems.appendChild(featuredHeader);
    featuredItems.appendChild(foodItems);
    featuredItems.appendChild(menuButton);

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("aboutContent");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");

    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");

    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "Our Story";
    aboutText.appendChild(aboutHeading);

    const bodyText = ['In Kapampangan, "Bap" is a term of respect, meaning "uncle." For us, it symbolizes the bond we share, not just as family but as equals. Bap’s Food Station was born during the pandemic by three brothers—Bom, Dut, and Sey—and their nephew, Basti. United by their love for food, they aim to share the warmth and respect that "Bap" represents.',
        'Basti believes that food is not only satisfying but far more pleasurable. He believes we should eat not merely to fill our stomachs but because we enjoy eating good food.'
    ];

    bodyText.forEach(text => {
        const paragraph = document.createElement("p");
        paragraph.classList.add("aboutBody");
        paragraph.textContent = text;
        aboutText.appendChild(paragraph);
    })

    const contactButton = document.createElement("button");
    contactButton.classList.add("contactButton");
    contactButton.textContent = "Contact Us";

    contactButton.addEventListener("click", () => loadTab(loadContact));
    
    aboutText.appendChild(contactButton);

    const aboutImage = document.createElement("img");
    aboutImage.classList.add("aboutImage");
    aboutImage.src = require("../assets/images/basti.jpg");
    aboutImage.alt = "Chef Basti";

    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImage);

    aboutContent.appendChild(aboutContainer);
    
    content.appendChild(slideshowContent);
    content.appendChild(featuredItems);
    content.appendChild(aboutContent);

    return content; 
}
