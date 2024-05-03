import crossing from './crossing.jpg';
import food1p from './1.jpg';
import food2p from './2.jpg';
import food3p from './3.jpg';
import drink1p from './9.jpg';
import drink3p from './7.jpg';
import drink4p from './6.jpg';

function foodDrinks(){

    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

    let container = document.createElement('div');
    container.classList.add('container');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');



    p1.innerHTML = "⍟ 4 GOLD COINS";
    p3.innerHTML = "⍟ 4 GOLD COINS";
    p4.innerHTML = "⍟ 3 GOLD COINS";
    p5.innerHTML = "⍟ 2 GOLD COINS";
    p6.innerHTML = "⍟ 1 GOLD COIN";
    p2.innerHTML = "⍟ 1 GOLD COIN";
    
    let foodsContainer = document.createElement('div');
    let foodHeader = document.createElement('h3');
    let foodItems = document.createElement('div');
    let food1 = document.createElement('div');
    let food2 = document.createElement('div');
    let food3 = document.createElement('div');
    
    foodsContainer.classList.add('foods-container');
    foodHeader.innerHTML = "Food";
    foodItems.classList.add('food-items');
    food1.classList.add('food1');
    food2.classList.add('food2');
    food3.classList.add('food3');
    
    
    let drinksContainer = document.createElement('div');
    let drinkHeader = document.createElement('h3');
    let drinkItems = document.createElement('div');
    let drink1 = document.createElement('div');
    let drink2 = document.createElement('div');
    let drink3 = document.createElement('div');
      
    drinksContainer.classList.add('drinks-container');
    drinkHeader.innerHTML = "drinks";
    drinkItems.classList.add('drink-items');
    drink1.classList.add('drink1');
    drink2.classList.add('drink2');
    drink3.classList.add('drink3');
    
    
    const foodItem1 = new Image();
    foodItem1.src = food1p;
    foodItem1.alt = 'picture of a dish';
    
    const foodItem2 = new Image();
    foodItem2.src = food2p;
    foodItem2.alt = 'picture of a dish';
    
    const foodItem3 = new Image();
    foodItem3.src = food3p;
    foodItem3.alt = 'picture of a dish';
    
    food1.appendChild(foodItem1);
    food2.appendChild(foodItem2);
    food3.appendChild(foodItem3);
    
    let food1Description = document.createElement('p');
    food1Description.classList.add('description');
    food1Description.innerHTML = "Behold, a dish of tender beef, lightly seasoned and swiftly seared over open flame. Served with a side of seasoned greens and savory herb butter.";
    
    let food2description = document.createElement('p');
    food2description.classList.add('description');
    food2description.innerHTML = "Feast upon a hearty portion of ram steak, slow-roasted with aromatic herbs and garlic. Juicy and flavorful, accompanied by roasted root vegetables and a rich pan jus.";
    
    let food3description = document.createElement('p');
    food3description.classList.add('description');
    food3description.innerHTML = "Delight in a golden-roasted chicken, marinated in a secret blend of spices and herbs from distant lands. Served with buttery mashed potatoes and a medley of seasonal vegetables.";
    
    food1.appendChild(food1Description);
    food1.appendChild(p1);
    food2.appendChild(food2description);
    food2.appendChild(p3);
    food3.appendChild(food3description);
    food3.appendChild(p4);
    
    foodItems.appendChild(food1);
    foodItems.appendChild(food2);
    foodItems.appendChild(food3);
    
    foodsContainer.appendChild(foodHeader);
    foodsContainer.appendChild(foodItems);
    
    
    
    
    
  
    
    
    
    
    
    const drinkItem1 = new Image();
    drinkItem1.src = drink4p;
    drinkItem1.alt = 'picture of a drink';
    
    const drinkItem2 = new Image();
    drinkItem2.src = drink1p;
    drinkItem2.alt = 'picture of a drink';
    
    const drinkItem3 = new Image();
    drinkItem3.src = drink3p;
    drinkItem3.alt = 'picture of a drink';
    
    drink1.appendChild(drinkItem1);
    drink2.appendChild(drinkItem2);
    drink3.appendChild(drinkItem3);
    
    let drink1Description = document.createElement('p');
    drink1Description.classList.add('description');
    drink1Description.innerHTML = "Quench thy thirst with our frothy ale, brewed with hops and barley from the finest fields. A hearty, robust drink fit for knights and adventurers alike.";
    
    let drink2description = document.createElement('p');
    drink2description.classList.add('description');
    drink2description.innerHTML = "Imbibe the nectar of the gods—our sweet and golden mead, crafted from pure honey and ancient recipes. Sip slowly and let the warmth of this ancient elixir envelop you.";
    
    let drink3description = document.createElement('p');
    drink3description.classList.add('description');
    drink3description.innerHTML = "Introducing our explosive concoction, the legendary Motolov! Brewed with fiery spirits and a touch of jest, this drink packs a bang with every sip. Handle with care and enjoy the sparks!";
    
    drink1.appendChild(drink1Description);
    drink1.appendChild(p2);
    drink2.appendChild(drink2description);
    drink2.appendChild(p6);
    drink3.appendChild(drink3description);
    drink3.appendChild(p5);
    
    drinkItems.appendChild(drink1);
    drinkItems.appendChild(drink2);
    drinkItems.appendChild(drink3);
    
    drinksContainer.appendChild(drinkHeader);
    drinksContainer.appendChild(drinkItems);
    
    
    
    container.appendChild(foodsContainer);
    container.appendChild(drinksContainer);
    content.appendChild(container);
    
    
    }

export default foodDrinks;