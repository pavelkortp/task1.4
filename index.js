document.getElementById('js-btn').onclick = () => {
    document.getElementById('first-square').remove();
}

document.getElementById('css-js-btn').onclick = () => {
    document.getElementById('first-square').setAttribute('class', 'hidden');
}

document.getElementById('switch-btn').onclick = () => {
    const square = document.getElementById('first-square');
    console.log('SWITCH');
    if(square.style.visibility == 'hidden'){
        square.style.visibility = 'visible';
    }else{
        square.style.visibility = 'hidden'
    }
}