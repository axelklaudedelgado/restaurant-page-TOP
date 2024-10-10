export default function loadTab(tabFunction, param = null) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    window.scrollTo(0, 0);
    const newContent = tabFunction(param);
    contentDiv.appendChild(newContent);
}