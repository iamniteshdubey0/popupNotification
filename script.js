const btn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('.popup-box');
console.log(popup);

btn.addEventListener('click', ()=> {
    popup.classList.add("pop-up");
    btn.style.display = "none";
})

closeBtn.addEventListener('click', ()=>{
    popup.classList.remove("pop-up");
    btn.style.display = "block";
})