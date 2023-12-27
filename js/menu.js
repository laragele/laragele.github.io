const col=()=>{
    const openbutton=document.querySelector(".nav__menu");
    const menu=document.querySelector(".nav__link");
    const closeMenu=document.querySelector(".nav__cerrar");
    openbutton.addEventListener("click",()=>{
        menu.classList.add("nav__link--show");
        openbutton.style.display= "none";
        closeMenu.style.display= "var(--show)";

    })

    closeMenu.addEventListener("click",()=>{
        menu.classList.remove("nav__link--show");
        openbutton.style.display= "block";
        closeMenu.style.display= "var(--show, none)";



    })



}  
col()
