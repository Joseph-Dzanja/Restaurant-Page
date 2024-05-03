function pigeon(){

    let content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }

    let container = document.createElement('div');
    let hr1 = document.createElement('hr');
    let h31 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p21 = document.createElement('p');
    let p22 = document.createElement('p');
    let p23 = document.createElement('p');
    let p24 = document.createElement('p');
    let p25 = document.createElement('p');
    let h32 = document.createElement('h3');
    let p31 = document.createElement('p');
    let p32 = document.createElement('p');
    let p4 = document.createElement('p');
    let hr2 = document.createElement('hr');
    let h33 = document.createElement('h3');
    let p5 = document.createElement('p');
    let hr3 = document.createElement('hr');

    container.classList.add('container');
    container.classList.add('font-adjust');
    p23.classList.add('margin-adjust');
    p24.classList.add('margin-adjust');
    p25.classList.add('margin-adjust');
    
    h31.innerHTML = "Contact Us via Pigeon Post, if Ye Dare!";
    p1.innerHTML = "Ahoy, ye seekers of revelry and roast! If ye wish to reach us by winged courier, here be the details:";
    p21.innerHTML = "Recipient: The Bard's Barrel";
    p22.innerHTML = "Address:";
    p23.innerHTML = "1 Minstrel's Way";
    p24.innerHTML = "Hearthshire Village, Fae Realm";
    p25.innerHTML = "The Realm of Hearthshire";
    h32.innerHTML = "A Word to the Wise (or not so wise)";
    p31.innerHTML = "- Strap yer message securely to yer pigeon's leg; no loose ends!";
    p32.innerHTML = "- Treat the feathered messenger well, or risk a hex upon yer next pint!";
    p4.innerHTML = "Ye parchments and missives be welcome here—just mind yer manners, or else the tavern cat may have words with ye.";
    h33.innerHTML = "Further Instructions";
    p5.innerHTML = "For those of ye favorin' ravens or enchanted scrolls, seek out the old oak by the village square. 'Twill guide ye to other means o' contact, should ye dare to venture forth.";

    container.appendChild(hr1);
    container.appendChild(h31);
    container.appendChild(p1);
    container.appendChild(p21);
    container.appendChild(p22);
    container.appendChild(p23);
    container.appendChild(p24);
    container.appendChild(p25);
    container.appendChild(h32);
    container.appendChild(p31);
    container.appendChild(p32);
    container.appendChild(p4);
    container.appendChild(hr2);
    container.appendChild(h33);
    container.appendChild(p5);
    container.appendChild(hr3);

    content.appendChild(container);
}

export default pigeon;