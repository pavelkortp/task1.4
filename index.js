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
document.getElementById('selector-btn').onclick = () => {
    const input = document.getElementById('selector');
    const item = document.querySelector(input.value);
    console.log(item);
    if (item.style.visibility == 'visible') {
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = 'visible';
    }
}
