import crossing from './crossing.jpg';

function foodDrinks(){

    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

    let container = document.createElement('div');
    container.classList.add('container');
    
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
    foodItem1.src = crossing;
    foodItem1.alt = 'picture of a dish';
    
    const foodItem2 = new Image();
    foodItem2.src = crossing;
    foodItem2.alt = 'picture of a dish';
    
    const foodItem3 = new Image();
    foodItem3.src = crossing;
    foodItem3.alt = 'picture of a dish';
    
    food1.appendChild(foodItem1);
    food2.appendChild(foodItem2);
    food3.appendChild(foodItem3);
    
    let food1Description = document.createElement('p');
    food1Description.classList.add('description');
    food1Description.innerHTML = "this is the original meal";
    
    let food2description = document.createElement('p');
    food2description.classList.add('description');
    food2description.innerHTML = "this is the original meal";
    
    let food3description = document.createElement('p');
    food3description.classList.add('description');
    food3description.innerHTML = "this is the original meal";
    
    food1.appendChild(food1Description);
    food2.appendChild(food2description);
    food3.appendChild(food3description);
    
    foodItems.appendChild(food1);
    foodItems.appendChild(food2);
    foodItems.appendChild(food3);
    
    foodsContainer.appendChild(foodHeader);
    foodsContainer.appendChild(foodItems);
    
    
    
    
    
    
    
    
    
    
    
    const drinkItem1 = new Image();
    drinkItem1.src = crossing;
    drinkItem1.alt = 'picture of a drink';
    
    const drinkItem2 = new Image();
    drinkItem2.src = crossing;
    drinkItem2.alt = 'picture of a drink';
    
    const drinkItem3 = new Image();
    drinkItem3.src = crossing;
    drinkItem3.alt = 'picture of a drink';
    
    drink1.appendChild(drinkItem1);
    drink2.appendChild(drinkItem2);
    drink3.appendChild(drinkItem3);
    
    let drink1Description = document.createElement('p');
    drink1Description.classList.add('description');
    drink1Description.innerHTML = "this is the original drink";
    
    let drink2description = document.createElement('p');
    drink2description.classList.add('description');
    drink2description.innerHTML = "this is the original drink";
    
    let drink3description = document.createElement('p');
    drink3description.classList.add('description');
    drink3description.innerHTML = "this is the original drink";
    
    drink1.appendChild(drink1Description);
    drink2.appendChild(drink2description);
    drink3.appendChild(drink3description);
    
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