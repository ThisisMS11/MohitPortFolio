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