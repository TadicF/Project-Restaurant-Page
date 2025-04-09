import './styles.css'; 
import { homePage } from './homePage.js';
import { menuPage } from './menuPage.js';

const pageLoader = {
  home: document.querySelector('#homeButton'),
  menu: document.querySelector('#menuButton'),
  about: document.querySelector('#aboutButton'),
  
  loadHome: function() {
    const content = document.querySelector('#content');
    content.replaceChildren();
    homePage();
  },
  loadMenu: function() {
    const content = document.querySelector('#content');
    content.replaceChildren();
    menuPage();
  },
  init: function() {
    this.home.addEventListener('click', () => { this.loadHome()});
    this.menu.addEventListener('click', () => { this.loadMenu()});
  }
}

pageLoader.init();