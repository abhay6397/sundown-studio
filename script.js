const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation() {
    const imgC = document.querySelector('.fixed-img');

    document.querySelector('.elem-container').addEventListener('mouseover', () => {
        const imgC = document.querySelector('.fixed-img')
        imgC.style.display = "block"
        // console.log(imgC)
    })
    document.querySelector('.elem-container').addEventListener('mouseleave', () => {

        imgC.style.display = "none"
        // console.log(imgC)
    })

    const elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        console.log(e)
        e.addEventListener('mouseenter', () => {
            let image = e.getAttribute('data-img')
            imgC.style.backgroundImage = `url(${image}) `
        })

    });
}


function swiperAnimatin() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,

    });
}
function menuAnimation() {
    
const menu = document.querySelector('nav h3')
const full = document.querySelector('.full-scr')
const navimg = document.querySelector('nav img')
let flg = 0
menu.addEventListener('click', () => {
    if (flg == 0) {
        full.style.top = '0'
        navimg.style.opacity = '0'
        flg = 1;
    } else {
        full.style.top = '-100%'
        navimg.style.opacity = '1'
        flg = 0;
    }
})

    
}
function screenLoader(){
    
const loader = document.querySelector('.loader')
setTimeout(() => {
    loader.style.top = '-100%'
}, 4000);
}

screenLoader()
swiperAnimatin()
page3Animation()
menuAnimation()
