const phoneNav = document.querySelector('.phoneNav');
const nav = document.querySelector('.nav');

phoneNav.addEventListener('click',() => {
    phoneNav.classList.toggle('active');
    nav.classList.toggle('active');
});
