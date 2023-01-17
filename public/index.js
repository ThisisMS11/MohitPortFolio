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

let swiper = new Swiper(".swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlidesBounds:true,
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 100,
    centeredSlides:true,
    mousewheel: true,
    keyboard: true,
    loop:true
});
