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
    const item = document.querySelector(input.value);
    if (item.style.visibility == 'visible') {
        item.style.visibility = 'hidden'
        btn.innerHTML = 'Show';
    } else {
        item.style.visibility = 'visible';
        btn.innerHTML = 'Hide';
    }
}

// TASK 5
const square = document.getElementById('yellow-square');
let clickCounter = 0;
square.onclick = () => {
    clickCounter++;
    alert('Привіт');
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
