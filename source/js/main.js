var menu = document.querySelector('.main-menu');
var button = document.querySelector('.menu-action__button-toggle');
var form_button = document.querySelector('.user-opinion__button');

var user_name = document.querySelector('[name=user-name]')
var user_surname = document.querySelector('[name=user-surname]')
var user_phone = document.querySelector('[name=user-mobile]')
var user_email = document.querySelector('[name=user-email]')

function close_menu() {
  menu.classList.add('hide');
  button.classList.remove('menu-action__button-toggle--toggle-modif');
}

function open_menu() {
  menu.classList.toggle('hide');
  button.classList.toggle('menu-action__button-toggle--toggle-modif');
}

window.onload = close_menu();
button.addEventListener("click",open_menu);
