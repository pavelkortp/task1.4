document.getElementById('first-btn').onclick = ()=>{
    
    let visability = document.getElementById('first-square').checkVisibility();
    if(visability){
        document.getElementById('first-square').style.display = 'none';
    }else{
        document.getElementById('first-square').style.display = 'block';
    }
    
}