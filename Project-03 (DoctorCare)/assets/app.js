// Variables
const header = document.querySelector("header")
const logo = document.querySelector("#logo")
const navLinks = document.querySelectorAll("nav li a")
const sections = document.querySelectorAll(".section")
const hambBtn = document.querySelector(".hamb")

window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        header.classList.add("active")
        logo.src = 'assets/img/secondary-logo.svg'
    }else{
        header.classList.remove("active")
        logo.src = 'assets/img/primary-logo.svg'
    }

    sections.forEach(section => {
        const top = window.scrollY + 150
        const offset = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
                document.querySelector('nav a[href*=' + id + ']').classList.add('active')
            })          
        }
    })
})

// A function that add a class when the button is clicked
hambBtn.addEventListener('click', () => {
    hambBtn.classList.toggle('active')
    header.classList.toggle('active')
    
})