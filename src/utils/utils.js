export function loadTab(tabFunction, param = null) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    window.scrollTo(0, 0);
    const newContent = tabFunction(param);
    contentDiv.appendChild(newContent);
}

export function handleActiveState(elements, clickedElement, activeClass) {
    elements.forEach(element => element.classList.remove(activeClass));

    clickedElement.classList.add(activeClass);
}