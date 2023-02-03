
 
 const hamburger = document.querySelector(".hb-menu");
  const navMenu = document.querySelector(".menu-ctn");
  
  
  hamburger.addEventListener ("click" , function () {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
  
  })


  