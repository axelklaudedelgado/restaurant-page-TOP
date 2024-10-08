import loadHome from './modules/home.js';
import loadContact from './modules/contact.js';

import './styles/styles.css';

const contentDiv = document.querySelector('#content');

function loadTab(tab) {
    contentDiv.innerHTML = '';
    const newContent = tab();
    contentDiv.appendChild(newContent);
}

document.querySelector('#homeButton').addEventListener('click', () => loadTab(loadHome));
document.querySelector('#contactButton').addEventListener('click', () => loadTab(loadContact));

loadTab(loadHome);