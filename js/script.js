//toggle class active untuk humburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
//toggle class active untuk search menu
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick=(e)=>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik di luar sidebar

const hamburger = document.querySelector('#hamburger-menu');
const searchB= document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!searchB.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});
