import foodDrinks from "./FoodAndDrinks";

function home(){
    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

    let container = document.createElement('div');
    let barname = document.createElement('h1');
    let div = document.createElement('div');
    let paragraph = document.createElement('p');
    let button =  document.createElement('button');


    container.classList.add('container');
    barname.classList.add('bar-name');
    paragraph.classList.add('bar-intro');
    button.classList.add('food-and-drinks-btn');

    button.addEventListener('click', foodDrinks);

    barname.innerHTML = "The Bard's Barrel";
    paragraph.innerHTML = '"Welcome to The Bard\'s Barrel! Where tales flow as freely as ale, And melodies weave magic in the air. Join us for a night of mirth and revelry!"';
    button.innerHTML = "Food and Drinks";

    div.appendChild(paragraph);
    div.appendChild(button);
    container.appendChild(barname);
    container.appendChild(div);
    content.appendChild(container);
}

export default home;

