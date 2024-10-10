export default function loadTab(tabFunction, param = null) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const newContent = tabFunction(param);
    contentDiv.appendChild(newContent);
}