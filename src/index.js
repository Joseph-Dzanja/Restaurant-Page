import './style.css';
import icon from './beers.svg';
import menu from './menu.svg';
import home from './home';
import foodDrinks from './FoodAndDrinks';
import about from './about';

let open_nav_btn = document.querySelector('.open-btn');
open_nav_btn.addEventListener('click', ()=>{
    let bottom_nav = document.querySelector('.bottom-nav');
    bottom_nav.classList.toggle('appear');
})

let home_btn = document.querySelector('.home-btn');
const myicon = new Image();
myicon.src = icon;
myicon.alt = 'img';


home_btn.appendChild(myicon);

let menu_btn = document.querySelector('.open-btn');
const myMenu = new Image();
myMenu.src = menu;
myMenu.alt = 'menu-img';


menu_btn.appendChild(myMenu);

home_btn.addEventListener('click', home);
let foodNDrinks = document.querySelector('.food-and-drinks-btn');
foodNDrinks.addEventListener('click', foodDrinks);

let aboutUS = document.querySelector('.about-bards-barrel-btn');
aboutUS.addEventListener('click', about);









