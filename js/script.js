//slider

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        asNavFor:".sliderbig",
        responsive:[
            {
                breakpoint: 478.98,
                settings:{
                    arrows: false,
                }
            }
        ]
    });
    $('.sliderbig').slick({
        arrows:false,      
        asNavFor: ".slider"
    });
    $('.slider-coments').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        asNavFor: '.coments',
        responsive:[
            {
                breakpoint: 478.98,
                settings:{
                    arrows: false,
                }
            }
        ]
    });
    $('.coments').slick({
        arrows: false,       
        asNavFor: ".slider-coments"
    })
    
});

//accordion-footer

const acc = document.querySelectorAll('.title-footer');
var i;
if(acc.length>0){
    acc.forEach(acc1 => {
        acc1.addEventListener("click", onAcc);
    });

    function onAcc(e){
        this.classList.toggle("show");
            this.classList.toggle("up");
            this.nextElementSibling.classList.toggle("active")        
    }
}

//burger menu

const iconMenu = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active_icon');
        menu.classList.toggle('active_menu');
    });
}

//scroll

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const goBlock = document.querySelector(menuLink.dataset.goto);
            const goBlockValue = goBlock.getBoundingClientRect().top + pageYOffset;

            if(iconMenu.classList.contains('active_icon')){
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active_icon');
                menu.classList.remove('active_menu');
            }
            window.scrollTo({
                top: goBlockValue-30,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}