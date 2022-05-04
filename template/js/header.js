var menuBtn = document.querySelector('#menu-btn');
var navBar = document.querySelector('.header-nav');

menuBtn.addEventListener('click', function() {
    navBar.classList.toggle('active');
});

window.onscroll = function() {
    navBar.classList.remove('active');
};