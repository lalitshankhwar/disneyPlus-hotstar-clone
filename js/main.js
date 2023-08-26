$('#main-slider').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    nav:true,
    dots: false,
    stagePadding:50,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// movies-slider
let cardContainer = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })
    
    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


// login open
$('.loginbtn').on("click", ()=>{
    $('.login-wrapper').css('display', 'flex');
})
$('.close-btn').on("click", ()=>{
    $('.login-wrapper').css('display', 'none');
})

// menu open
$(".menubtn").mouseover(()=>{
    if($(window).width() < 991){
        $('.side-menu').css("left", "0");
    }
})

$(".side-menu").mouseover(()=>{
    $('.side-menu').css("left", "0");
})

$(".side-menu").mouseout(()=>{
    $('.side-menu').css("left", "-350px");
})
$(".bi-x-lg").click(()=>{
    $('.side-menu').css("left", "-350px");
})