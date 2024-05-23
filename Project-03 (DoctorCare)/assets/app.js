// Variables
const header = document.querySelector("header")
const logo = document.querySelector("#logo")

window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        header.classList.add("active")
        logo.src = 'assets/img/secondary-logo.svg'
    }else{
        header.classList.remove("active")
        logo.src = 'assets/img/primary-logo.svg'
    }
})  