import { loadTab, handleActiveState } from "../utils/utils.js";

const categoriesData = {
    featured: {
        title: "Manager's Choice",
        items:[
            { 
                name: "Sizzling Balut", 
                price: [
                    { price: "PHP 80", pieceCount: "4 PCS" }, 
                    { price: "PHP 130", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/balut.png"),
            },
            {
                name: "Mojos",
                price: [
                    { price: "PHP 60", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/mojos.png"),
            },
            {
                name: "Oysterrific Tofu",
                price: [
                    { price: "PHP 80", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/tofu.png"),
            },
            {
                name: "Ham & Cheese Lumpia",
                price: [
                    { price: "PHP 60", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/cheesesticks.png"),
            },
            {
                name: "Bapcorn",
                price: [
                    { price: "PHP 100", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/bapcorn.png"),
            }
        ]
    },
    wings: {
        title: "Mighty Wings",
        items: [
            { 
                name: "Spicy Buffalo", 
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/buffaloItem.jpg"),
            },
            {
                name: "Garlic Parmesan",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/parmesanItem.jpg"),
            },
            {
                name: "Soy Garlic",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/soyItem.jpg"),
            },
            {
                name: "Honey Butter Garlic",
                price: [
                    { price: "PHP 130", pieceCount: "6 PCS" }, 
                    { price: "PHP 160", pieceCount: "8 PCS" }
                ],
                img: require("../assets/images/honeyItem.jpg"),
            },
        ]
    },
    street: {
        title: "Luxury Street Foods",
        items: [
            { 
                name: "Fish Balls", 
                price: [
                    { price: "PHP 20", pieceCount: "20 PCS" } 
                ],
                img: require("../assets/images/fishball.png"),
            },
            { 
                name: "Hotdog", 
                price: [
                    { price: "PHP 30", pieceCount: "12 PCS" } 
                ],
                img: require("../assets/images/hotdog.png"),
            },
            { 
                name: "Chicken Balls", 
                price: [
                    { price: "PHP 30", pieceCount: "8 PCS" } 
                ],
                img: require("../assets/images/chickenball.png"),
            },
            { 
                name: "Kikiam", 
                price: [
                    { price: "PHP 20", pieceCount: "8 PCS" } 
                ],
                img: require("../assets/images/kikiam.png"),
            },
            { 
                name: "Kwek-Kwek", 
                price: [
                    { price: "PHP 30", pieceCount: "5 PCS" } 
                ],
                img: require("../assets/images/kwekkwek.png"),
            },
            { 
                name: "Tokwa", 
                price: [
                    { price: "PHP 20", pieceCount: "5 PCS" } 
                ],
                img: require("../assets/images/tokwa.png"),
            },
            { 
                name: "Siomai", 
                price: [
                    { price: "PHP 30", pieceCount: "5 PCS" } 
                ],
                img: require("../assets/images/siomai.png"),
            },
            { 
                name: "One Day Old", 
                price: [
                    { price: "PHP 35", pieceCount: "3 PCS" } 
                ],
                img: require("../assets/images/oneDayOld.png"),
            },
            { 
                name: "Pork & Cheese Dynamite", 
                price: [
                    { price: "PHP 80", pieceCount: "6 PCS" } 
                ],
                img: require("../assets/images/porkcheese.png"),
            },
            { 
                name: "Chicken & Cheese Dynamite", 
                price: [
                    { price: "PHP 80", pieceCount: "6 PCS" } 
                ],
                img: require("../assets/images/chickencheese.png"),
            },
            { 
                name: "Ham & Cheese Dynamite", 
                price: [
                    { price: "PHP 80", pieceCount: "6 PCS" } 
                ],
                img: require("../assets/images/hamcheese.png"),
            }
        ]
    },
    other: {
        title: "Other Food Items",
        items: [
            { 
                name: "Flavored Rice", 
                price: [
                    { price: "PHP 10", pieceCount: "1 CUP - STEAMED" }, 
                    { price: "PHP 15", pieceCount: "1 CUP - SOY FRIED" },
                    { price: "PHP 15", pieceCount: "1 CUP - GARLIC FRIED" }, 
                    { price: "PHP 15", pieceCount: "1 CUP - JAVA" }
                ],
                img: require("../assets/images/rice.png"),
            },
            { 
                name: "Sizzling Balut", 
                price: [
                    { price: "PHP 80", pieceCount: "4 PCS" }, 
                    { price: "PHP 130", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/balut.png"),
            },
            { 
                name: "Gulaman", 
                price: [
                    { price: "PHP 20", pieceCount: "16 OZ" } 
                ],
                img: require("../assets/images/gulaman.png"),
            },
            {
                name: "Mojos",
                price: [
                    { price: "PHP 60", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/mojos.png"),
            },
            {
                name: "Bapcorn",
                price: [
                    { price: "PHP 100", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/bapcorn.png"),
            },
            {
                name: "Oysterrific Tofu",
                price: [
                    { price: "PHP 80", pieceCount: "1 BOX" }
                ],
                img: require("../assets/images/tofu.png"),
            },
            {
                name: "Ham & Cheese Lumpia",
                price: [
                    { price: "PHP 60", pieceCount: "6 PCS" }
                ],
                img: require("../assets/images/cheesesticks.png"),
            },
        ]
    },
    platter: {
        title: "Platters",
        items: [
            { 
                name: "Mighty Wings", 
                price: [
                    { price: "PHP 400", pieceCount: "20 PCS" }, 
                    { price: "PHP 800", pieceCount: "40 PCS" }
                ],
                img: require("../assets/images/platter.png"),
            },
            {
                name: "Street Foods",
                price: [
                    { price: "PHP 100", pieceCount: "SMALL" }, 
                    { price: "PHP 150", pieceCount: "MEDIUM" },
                    { price: "PHP 200", pieceCount: "LARGE" }
                ],
                img: require("../assets/images/streetPlatter.png"),
            }
        ]
    }
};

export default function loadMenu(category) {
    const content = document.createElement("div");

    const menuCategories = document.createElement("div");
    menuCategories.classList.add("menuCategories");

    const foodCategories = document.createElement("div");
    foodCategories.classList.add("foodCategories");

    const categories = [
        { img: require("../assets/images/wings.png"), alt: "Chicken Wings Item", label: "Wings", categoryName: "wings" },
        { img: require("../assets/images/streetFood.png"), alt: "Street Food Item", label: "Street Foods", categoryName: "street" },
        { img: require("../assets/images/mojos.png"), alt: "Other Item", label: "Other Items", categoryName: "other" },
        { img: require("../assets/images/platter.png"), alt: "Platter Item", label: "Platters", categoryName: "platter" }
    ];

    categories.forEach(category => {    
        const button = document.createElement("button");
        button.classList.add("category");
        button.addEventListener("click", () => {
            loadTab(loadMenu, category.categoryName);
        });

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
            if(itemName.textContent === "Chicken & Cheese Dynamite") itemName.style.fontSize = "30px";
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
            if (imageManipulation === "round")img.classList.add("circleImage");
            if (imageManipulation === "padded")img.classList.add("paddedImage");
            img.src = item.img;
            img.alt = item.name;
            img.classList.add("itemImage");

            card.appendChild(itemText);
            card.appendChild(img);

            itemCards.appendChild(card);
        });
        categoryItems.appendChild(categoryTitle);
        categoryItems.appendChild(itemCards);
    };

    const selectedCategoryData = categoriesData[category];
    const categoryArray = Object.keys(categoriesData);
    const selectedCategoryIndex = categoryArray.indexOf(category);

    if (selectedCategoryData) {
        const { title, items } = selectedCategoryData;
        const imageManipulation = (category === "wings") ? "round" : (category === "platter") ? "padded" : null;
        if(selectedCategoryIndex !== 0) {
            handleActiveState(Array.from(foodCategories.children), foodCategories.children[selectedCategoryIndex - 1], "activeCategory");
        }
        createCategoryDisplay(title, items, imageManipulation);
    }
    
    content.appendChild(menuCategories);
    content.appendChild(categoryItems);
    
    return content; 
}
