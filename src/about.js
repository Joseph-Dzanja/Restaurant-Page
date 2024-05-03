    import barkeeper from './6c2aaebfa123df5c159933809d645fb7.jpg';

    function about(){

    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    
    let container = document.createElement('div');
    let intro = document.createElement('h2');
    let ourTavern = document.createElement('h2');
    let offer = document.createElement('h2');
    let barkeep = document.createElement('h2');
    let revelry = document.createElement('h2');
    let introP = document.createElement('p');
    let ourTavernP = document.createElement('p');
    let offerP = document.createElement('p');
    let barkeepP = document.createElement('p');
    let revelryP = document.createElement('p');
    let barK = new Image();
    barK.src = barkeeper;
    barK.alt = 'barkeeper';


    container.classList.add('container');
    
    intro.innerHTML = "Hear ye, Travelers! Welcome to The Bard's Barrel";
    introP.innerHTML = "In the heart of Hearthshire, where cobblestones meet castle walls, stands The Bard's Barrel, where tankards overflow and tales unfold.";
    ourTavern.innerHTML = "Our Tavern";
    ourTavernP.innerHTML = "At The Bard's Barrel, we're all about good drinks, good company, and good times. Picture this: cozy corners, roaring fires, and barrels brimming with the finest brews this side of the realm";
    offer.innerHTML = "What's on Offer";
    offerP.innerHTML = "Tankards of ale, goblets of mead, and spirits to lift your spirits. Pair 'em with hearty bites to keep the revelry alive.";
    barkeep.innerHTML = "Our Barkeep";
    barkeepP.innerHTML = "Meet Ol' Grizz, the Barkeep at The Bard's Barrel! He's a wild soul, known for his hearty drinks and rowdy tales, but deep down, he fiercely loves his tavern. Join Grizz for a wild night of revelry and good cheer—you won't forget this adventure at The Bard's Barrel!";
    revelry.innerHTML = "Join the Revelry";
    revelryP.innerHTML = "Whether ye seek respite or revelry, The Bard's Barrel welcomes all who thirst for adventure and mirth.";

    container.appendChild(intro);
    container.appendChild(introP);
    container.appendChild(ourTavern);
    container.appendChild(ourTavernP);
    container.appendChild(offer);
    container.appendChild(offerP);
    container.appendChild(barkeep);
    container.appendChild(barK);
    container.appendChild(barkeepP);
    container.appendChild(revelry);
    container.appendChild(revelryP);

    content.appendChild(container);

    }

    export default about;