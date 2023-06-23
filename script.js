let search = document.querySelector('.search');

document.querySelector('#search-bar').onclick  = () => {
    search.classList.toggle('active');
    shoppingcart.classList.remove('active');



}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick  = () => {
    navbar.classList.toggle('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick  = () => {
    shoppingcart.classList.toggle('active');
    search.classList.remove('active');

}



var swiper = new Swiper('.produto-slider', {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    },
});
