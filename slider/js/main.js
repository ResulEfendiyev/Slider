let slides = document.querySelectorAll('.slider_item');
let counter = 0;
let right = document.getElementById('r');
let left = document.getElementById('l');
// console.log(right);
// if(counter!=slides.length-1){
//     right.setAttribute("disabled",false);
// }else if(counter!=0){
//     left.setAttribute("disabled",false);
// }
right.addEventListener('click',()=>{
    document.querySelector('.active').classList.remove('active');
    if(counter==slides.length-1){
        right.setAttribute("disabled",true);
    }

    else{
        
        counter++;
    }
    right.disabled = false;
    slides[counter].classList.add('active');
})
left.addEventListener('click',()=>{
    document.querySelector('.active').classList.remove('active');
    if(counter==0){
        left.setAttribute("disabled",true);
    }
    else{
        
        counter--;
    }
    left.disabled = false;
    slides[counter].classList.add('active');
})