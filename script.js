let navBurger = document.querySelector(".nav-burger");
let navWrapper = document.querySelector(".nav-wrapper");
let navClose = document.querySelector(".nav-close");


navBurger.addEventListener('click', function(){
    navWrapper.style.display = 'flex';
})

navClose.addEventListener('click', function(){
    navWrapper.style.display = 'none';
})

window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 950){
        navWrapper.style.display = 'block';
    }
    else {navWrapper.style.display = 'none';
    }
})
