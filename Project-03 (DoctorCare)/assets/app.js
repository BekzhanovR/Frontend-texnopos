// Variables
const header = document.querySelector("header")
const logo = document.querySelector("#logo")
const navLinks = document.querySelectorAll("nav li")

window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        header.classList.add("active")
        logo.src = 'assets/img/secondary-logo.svg'
    }else{
        header.classList.remove("active")
        logo.src = 'assets/img/primary-logo.svg'
    }
})  

navLinks.forEach(element => {
    element.addEventListener("click", () => {
        navLinks.forEach(navLink => navLink.classList.remove("active"))
        element.classList.add("active")
    })
});