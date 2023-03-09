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
    centeredSlidesBounds: true,
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,
    keyboard: true,
    loop: true
});

// js for the manipulation of the bottom bar

const actualmenu = document.getElementById('actualmenu');

// To close the menu
const crossclick = () => {
    document.getElementById('bottomcross').classList.add('hidden');
    document.getElementById("BottomOtherOptions").classList.remove('hidden');
    actualmenu.classList.remove('actualmenu-show');
}

// to open the menu
const toggleMenu = () => {

    document.getElementById('bottomcross').classList.remove('hidden');
    document.getElementById("BottomOtherOptions").classList.add('hidden');
    actualmenu.classList.add('actualmenu-show');
}
