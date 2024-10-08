export default function loadContact() {
    const content = document.createElement("div");

    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contactHeader");
    
    const headerText = document.createElement("p");
    const headerSubtext = document.createElement("p");

    headerText.classList.add("headerText");
    headerSubtext.classList.add("headerSubtext");

    headerText.textContent = "We’d love to hear from you! Get in touch with us today";
    headerSubtext.textContent = "Send us your inquiry, concern, or suggestions";

    contactHeader.appendChild(headerText);
    contactHeader.appendChild(headerSubtext);

    const contactBody = document.createElement("div");
    contactBody.classList.add("contactBody");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");

    const contactItems = [
        {
            src: require("../assets/images/phone.svg"),
            alt: "Phone Icon",
            label: "Phone:",
            value: "09123456789"
        },
        {
            src: require("../assets/images/email.svg"),
            alt: "Email Icon",
            label: "Email:",
            value: "bapsf00d@gmail.com"
        },
        {
            src: require("../assets/images/address.svg"),
            alt: "Work Address Icon",
            label: "Address:",
            value: "09123456789"
        },
        {
            src: require("../assets/images/hours.svg"),
            alt: "Working Hours Icon",
            label: "Hours:",
            value: "9:00 AM-6:00 PM"
        }
    ];
    
    const contactGroups = document.createElement('div');
    contactGroups.classList.add('contactGroups');
    
    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contactItem');
    
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
    
        const label = document.createElement('p');
        label.classList.add('label');
        label.textContent = item.label;
    
        const value = document.createElement('p');
        value.classList.add('value');
        value.textContent = item.value;
    
        contactItem.appendChild(img);
        contactItem.appendChild(label);
        contactItem.appendChild(value);
        contactGroups.appendChild(contactItem);
    });
    
    const map = document.createElement("div");
    map.classList.add("mapLocation");

    const mapLocation = document.createElement('div');
    mapLocation.classList.add('mapLocation');


    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3850.200184942999!2d120.73596957591126!3d15.202207362063197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDEyJzA3LjkiTiAxMjDCsDQ0JzE4LjgiRQ!5e0!3m2!1sen!2sph!4v1728377146454!5m2!1sen!2sph";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    mapLocation.appendChild(iframe);
    
    contactInfo.appendChild(contactGroups);
    contactInfo.appendChild(mapLocation); 

    contactBody.appendChild(contactInfo);

    content.appendChild(contactHeader);
    content.appendChild(contactBody);

    return content; 
}
