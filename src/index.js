import loadHome from './modules/home.js';
import loadContact from './modules/contact.js';
import loadTab from './utils/tabLoader.js';

import './styles/styles.css';

document.querySelector('#homeButton').addEventListener('click', () => loadTab(loadHome));
document.querySelector('#contactButton').addEventListener('click', () => loadTab(loadContact));

loadTab(loadHome);