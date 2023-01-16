document.addEventListener('click', (e) => {
    const isDropDownButton = e.target.matches("[uparrow]");


    let currentSkill;
    if (isDropDownButton) {

        currentCategory = e.target.closest("[skillsdropdownmenu]");

        currentSkillDropDown = e.target.closest("[skillsdropdownmenu]").querySelector('.Allskills');

        currentSkillDropDown.classList.toggle('active');
        // console.log(e.target.closest("[skillsdropdownmenu]").querySelector('.Allskills'));
    }
})

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });