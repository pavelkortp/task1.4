//TASK 1 - 3
document.getElementById('js-btn').onclick = () => {
    const squares = document.getElementsByClassName('square');
    for (let i = squares.length - 1; i >= 0; i--) {
        squares.item(i).remove();
    }
}

document.getElementById('css-js-btn').onclick = () => {
    const squares = document.getElementsByClassName('square');
    for (let i = squares.length - 1; i >= 0; i--) {
        squares.item(i).setAttribute('class', 'hidden');
    }
}

document.getElementById('switch-btn').onclick = () => {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        if (squares.item(i).style.visibility == 'hidden') {
            squares.item(i).style.visibility = 'visible';
        } else {
            squares.item(i).style.visibility = 'hidden';
        }
    }
}

// TASK 4
const btn = document.getElementById('selector-btn');
btn.onclick = () => {
    const input = document.getElementById('selector');
    const items = document.querySelectorAll(input.value);
    for (let i = items.length - 1; i >= 0; i--) {
        const e = items.item(i);
        if (e.style.visibility == 'visible') {
            e.style.visibility = 'hidden'
            btn.innerHTML = 'Show';
        } else {
            e.style.visibility = 'visible';
            btn.innerHTML = 'Hide';
        }
    }

}

// TASK 5
const square = document.getElementById('yellow-square');
let clickCounter = 0;
square.onclick = () => {
    clickCounter++;
    alert('Hello');
    if (clickCounter > 0) {
        square.onclick = () => {
            square.remove();
        }
    }
}

// TASK 7
const rect = document.getElementById('rect-hider');
rect.oninput = () => {
    document.getElementById('green-rect').style.visibility = 'hidden';
}
rect.onfocus = () => {
    document.getElementById('green-rect').style.visibility = 'visible';
}

// TASK 8
document.getElementById('get-photo').onclick = () => {
    const links = document.getElementById('photo-link').value.split(/\n/g);
    const imageContainer = document.getElementById('img-container');
    while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
    }
    for (let i = links.length - 1; i >= 0; i--) {
        const img = document.createElement('img');
        img.src = links[i];
        img.style.width = '300px';
        imageContainer.appendChild(img);
    }
}

//Task 10
document.onpointermove = (event) => {
    const p = document.getElementById('tracker');
    p.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
}

//TASK 11
document.getElementById('lang').innerHTML = `Browser language: ${navigator.language}`;

//TASK 12
navigator.geolocation.getCurrentPosition((pos) => {
    document.getElementById('geo').innerHTML = `Latitude ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;
});

// TASK 13
const local = document.getElementById('local');
const ses = document.getElementById('session');
const cookie = document.getElementById('cookie');

local.onchange = () => {
    console.log(local.value);
    localStorage.setItem('local', local.value);
}

ses.onchange = () => {
    sessionStorage.setItem('session', ses.value);
}

cookie.onchange = () => {
    document.cookie = `cookie=${cookie.value}`;
}


window.onload = () => {
    local.innerText = localStorage.getItem('local');
    ses.innerText = sessionStorage.getItem('session');
    cookie.innerText = document.cookie.split(';').pop().slice(8);
}

//TASK 14
const appearsBtn = document.getElementById('up-btn');
window.onscroll = () => {
    if (window.scrollY > window.innerHeight / 5) {
        appearsBtn.style.visibility = 'visible';
    } else {
        appearsBtn.style.visibility = 'hidden';
    }
}

appearsBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// TASK 15
document.getElementById('out-block').onclick = () => {
    alert('Outer block');
}

document.getElementById('inner-block').onclick = (e) => {
    e.stopPropagation();
    alert('INNER block');
}

//Task 16
document.getElementById('blocker').onclick = () => {
    const block = document.createElement('div');
    block.setAttribute('id', 'blocker-rect');

    const body = document.querySelector('body');
    body.appendChild(block);
    body.style.overflow = 'hidden';

    block.onclick = () => {
        block.remove();
        body.style.overflow = 'visible';
    }
}


//TASK 17
document.getElementById('no-reload').onsubmit = (event) => {
    event.preventDefault();
}


//TASK 18
const dropZone = document.getElementById("drop-zone");
const label = document.getElementById('label');

const highlight = () => {
    dropZone.classList.add('dropped');
}
const unhighlight = () => {
    dropZone.classList.remove('dropped');
}

dropZone.ondragenter = highlight;
dropZone.ondragover = highlight;
dropZone.ondragleave = () => {
    if (document.getElementById('inp').value !== null){
        highlight();
    }
    unhighlight();
};
dropZone.ondrop = highlight;

dropZone.onchange = () => {
    label.innerText = 'Selected succsessfully';
    highlight();
}









