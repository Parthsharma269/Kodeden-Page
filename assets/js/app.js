// NavBar

const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("navbg");
    document.querySelector("body").classList.toggle("overflow-hidden");
})

// Slick-slider

$('.Slick-slider').slick({
    speed: 555,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});