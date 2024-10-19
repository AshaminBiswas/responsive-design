const header = document.querySelector(".header")
const menu = document.querySelector(".menu")

const toggleNav = ()=>{
    header.classList.toggle("active")
}


menu.addEventListener("click", ()=> toggleNav())