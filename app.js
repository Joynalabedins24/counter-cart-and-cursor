let incrementBtn = document.querySelector('.counter .plus');
let input = document.querySelector('.counter input')

incrementBtn.addEventListener('click', ()=>{
     input.value =   (Number(input.value) + 1)
})


let decrementBtn = document.querySelector('.counter .minus');


decrementBtn.addEventListener('click', ()=>{
    if(input.value > 1){
        input.value =   input.value - 1
    }
})


let cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', (e)=>{
    let left = e.clientX
    let top = e.clientY

    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';

    console.log(top, left)



})