let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sideBar");

menuIcon.onclick = function(){
     sideBar.classList.toggle("small-sidebar");
}