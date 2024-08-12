let navToggle = document.getElementById('nav-toggle');
let navClose = document.getElementById('nav-close');
let navMenu = document.getElementById('nav-menu');
let navLink = document.querySelectorAll('.nav-link');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

function linkAction(){
    let navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction));



const sr = ScrollReveal({
    distance:'90px',
    duration:3000,
})

sr.reveal(`.home-data`,{origin:'top', delay:400})
sr.reveal(`.home-img`,{origin:'bottom', delay:400})
sr.reveal(`.home-footer`,{origin:'bottom', delay:400})
