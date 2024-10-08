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

    content.appendChild(contactHeader);

    return content; 
}
