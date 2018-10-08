var button_menu = document.querySelector('.main-menu__button-toggle');
var menu = document.querySelector('.main-menu__menu-list');
console.log(button_menu);
console.log(menu);

button_menu.addEventListener("click",function(evt){
  evt.preventDefault();
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menu.classList.add("hide");
    button_menu.classList.remove("main-menu__button-toggle--toggle-modif");
  }
    else {
      menu.classList.remove("hide");
      menu.classList.add("open");
      button_menu.classList.add("main-menu__button-toggle--toggle-modif");
    }
});



// main-menu__button-toggle--toggle-modif
