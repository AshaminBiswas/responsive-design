// let menu = document.getElementsByClassName("menu");
// let menuList = document.getElementById("menulist");

// function toggleMenu() {
//   if ((menuList.style.display = "none")) {
//     menuList.style.display = "flex";
//   }

  
// }


let menuList = document.getElementById("menuList")
    
function toggleMenu(){
    if(menuList.style.display =="none"){
        menuList.style.display = "flex"
    }else{
        menuList.style.display = "none"
    }
}