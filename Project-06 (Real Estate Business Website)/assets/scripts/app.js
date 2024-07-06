// Variables
const pages = document.querySelectorAll('.pages')
const navLinks = document.querySelectorAll('.nav-links')

navLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClass(navLinks, 'active')
        removeClass(pages, 'active')
        addClass(pages,'active',index)
        item.classList.add('active')
    })
})

// Functions
function removeClass(elements, nameOfClass){
    elements.forEach(e => {
        e.classList.remove(nameOfClass)
    })
}

function addClass(elements, nameOfClass, value){
    elements.forEach((e, index) => {
        if(value == index){
            e.classList.toggle(nameOfClass)
        }
    })
}