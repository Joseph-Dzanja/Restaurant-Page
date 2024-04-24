import './style.css';
import icon from './beers.svg';

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