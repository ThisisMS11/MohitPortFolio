document.addEventListener('click', (e) => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");

    // this is to check that if our clicked thing is Dropdown or not and if the parent of the clicked is data-dropdown then also we don't want to do anything so we simply return from there.


    //! this depicts the action we want on clicking on any dropdown item in simple words.
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return;


    // so if the clicked is a dropdown then we want to active the closest one to toggle active one here.
    let currentDropDown;

    if (isDropDownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle('active');
    }


    //  we want to deactivate all the other dropdowns using the below thing.
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown==currentDropDown) return ;
        dropdown.classList.remove("active");
    })
})