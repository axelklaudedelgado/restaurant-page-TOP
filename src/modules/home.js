import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import imagesLoaded from 'imagesloaded';

export default function loadHome() {
    const content = document.createElement("div");

    const slideshowContent = document.createElement("div");
    slideshowContent.classList.add("slideshowContainer");

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

    content.appendChild(slideshowContent);
    content.appendChild(featuredItems);

    return content; 
}
