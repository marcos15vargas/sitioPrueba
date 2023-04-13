const menu = document.querySelector('.menu');
const claseMenu = menu.classList;
const body = document.querySelector('.body');
const claseBody = body.classList;

menu.addEventListener('click',()=>{
    claseMenu.toggle('active');
    claseBody.toggle('menu-open');
})