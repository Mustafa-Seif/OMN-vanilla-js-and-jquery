


const product =document.querySelector(".product")
const productCard =document.querySelector(".products-card")
const cities =document.querySelector(".cities")
const citiesCard =document.querySelector(".cities-card")
const worksSec =document.querySelector(".works-text")
const iphone =document.querySelector("#iphone")
const nav =document.querySelector("nav")



window.onscroll = function () {
    if (window.scrollY >= product.offsetTop -200) {
        productCard.style.opacity='1'
    }
    if (window.scrollY >= cities.offsetTop -100) {
        citiesCard.style.opacity='1'

    }

    if (window.scrollY >= worksSec.offsetTop - 250) {
        iphone.style.cssText=
        "opacity:1; position:relative ; top:0;"
         
    }
}



$(function () {
    $('.menu-icon').click(function () {
        $('.menu ul').toggle()
    })
})