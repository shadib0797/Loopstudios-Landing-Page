const close = document.querySelector(".close");
const navBar = document.querySelector(".nav");
const toggle = document.querySelector(".toggle");
const logo = document.querySelector(".logo");

toggle.addEventListener("click", function(){
  close.style.display="block";
  logo.style.position="fixed";
  navBar.style.visibility="visible";
});

close.addEventListener("click", function(){

  close.style.display="none";
  logo.style.position="relative";
  navBar.style.visibility="hidden";

});
