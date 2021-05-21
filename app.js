let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

console.log(darkMode);

// Setting Global Function
const enableDarkMode = () => {
    // 1. Add the class darkmode to the body
    document.body.classList.add('darkmode');
    // 2. Update the darkmode to the localstorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // 1. Add the class darkmode to the body
    document.body.classList.remove('darkmode');
    // 2. Update the darkmode to the localstorage
    // Here in null place you can even keep it empty
    localStorage.setItem("darkMode", null);
};

darkModeToggle.addEventListener("click", () => {
    // We are updating the variable everytime we click 
    darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);
    // console.log('clicked');
    if (enableDarkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log("darkMode");
    }
});