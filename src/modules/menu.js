import { handleActiveState } from "../utils/utils.js";

export default function loadMenu(category) {
    const content = document.createElement("div");

    const menuCategories = document.createElement("div");
    menuCategories.classList.add("menuCategories");

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

    menuCategories.appendChild(foodCategories);
    
    const categoryItems = document.createElement("div");
    categoryItems.classList.add("categoryItems");

    const createCategoryDisplay = (categoryName, items, imageManipulation = null) => {
        const categoryTitle = document.createElement("h1");
        categoryTitle.textContent = categoryName;

        const itemCards = document.createElement("div");
        itemCards.classList.add("itemCards");

        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            const itemText = document.createElement("div");
            itemText.classList.add("itemText");

            const itemName = document.createElement("h1");
            itemName.classList.add("itemName");
            itemName.textContent = item.name;
            itemText.appendChild(itemName);

            const itemPriceContainer = document.createElement("div");
            itemPriceContainer.classList.add("itemPrice");

            item.price.forEach(priceInfo => {
                const price = document.createElement("h2");
                price.classList.add("price");
            
                const priceText = document.createTextNode(priceInfo.price);
                const pieceCountSpan = document.createElement("span");
                pieceCountSpan.classList.add("pieceCount");
                pieceCountSpan.textContent = ` - ${priceInfo.pieceCount}`;
            
                price.appendChild(priceText);
                price.appendChild(pieceCountSpan);
                itemPriceContainer.appendChild(price);
            });

            itemText.appendChild(itemPriceContainer);

            const img = document.createElement("img");
            if(imageManipulation === "round")img.classList.add("circleImage");
            img.src = item.img;
            img.alt = item.alt;
            img.classList.add("itemImage");

            card.appendChild(itemText);
            card.appendChild(img);

            itemCards.appendChild(card);
        });
        categoryItems.appendChild(categoryTitle);
        categoryItems.appendChild(itemCards);
    };

    if (category === "featured") {
        const items = [
            { 
                name: "Sizzling Balut", 
                price: [
                    { price: "PHP 80", pieceCount: "4 PCS" }, 
                    { price: "PHP 130", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/balut.png"),
                alt: "Sizzling Balut"
            },
            {
                name: "Mojos",
                price: [
                    { price: "PHP 60", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/mojos.png"),
                alt: "Mojos"
            },
            {
                name: "Oysterrific Tofu",
                price: [
                    { price: "PHP 80", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/tofu.png"),
                alt: "Oysterrific Tofu"
            },
            {
                name: "Ham & Cheese Lumpia",
                price: [
                    { price: "PHP 60", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/cheesesticks.png"),
                alt: "Ham & Cheese Lumpia"
            },
            {
                name: "Bapcorn",
                price: [
                    { price: "PHP 100", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/bapcorn.png"),
                alt: "Bapcorn"
            }
        ];

        createCategoryDisplay("Manager's Choice", items);
    } else if (category === "wings") {
        handleActiveState(Array.from(foodCategories.children), foodCategories.children[0], "activeCategory");
        const items = [
            { 
                name: "Spicy Buffalo", 
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/buffaloItem.jpg"),
                alt: "Spicy Buffalo"
            },
            {
                name: "Garlic Parmesan",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/parmesanItem.jpg"),
                alt: "Garlic Parmesan"
            },
            {
                name: "Soy Garlic",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/soyItem.jpg"),
                alt: "Soy Garlic"
            },
            {
                name: "Honey Butter Garlic",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/honeyItem.jpg"),
                alt: "Honey Butter Garlic"
            },
        ];

        createCategoryDisplay("Chicken Wings", items, "round");
    }
    
    content.appendChild(menuCategories);
    content.appendChild(categoryItems);
    
    return content; 
}
