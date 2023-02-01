let count=0;
let buttonCount=document.querySelector('#count');
let buttonSave=document.querySelector('#save');
let counter=document.querySelector('#counter');
let store=document.querySelector('#Store');

buttonSave.addEventListener('click',()=>{
    let str=count + " - ";
    store.textContent += str;
});
buttonCount.addEventListener('click',() =>{
    count +=1;
    counter.innerHTML=count;
}
)