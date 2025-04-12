import './styles.css'; 
import { homePage } from './homePage.js';
import { menuPage } from './menuPage.js';
import { contactPage } from './contactPage.js';

homePage();

const pageLoader = {
  home: document.querySelector('#homeButton'),
  menu: document.querySelector('#menuButton'),
  contact: document.querySelector('#contactButton'),
  
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
  loadContact: function() {
    const content = document.querySelector('#content');
    content.replaceChildren();
    contactPage();
  },
  init: function() {
    this.home.addEventListener('click', () => { this.loadHome()});
    this.menu.addEventListener('click', () => { this.loadMenu()});
    this.contact.addEventListener('click', () => { this.loadContact()});
  }
}

pageLoader.init();