'use strict'// Суворий режим

// Оголошення функцій

// Функція пошуку елемента по id
const get = id => document.getElementById(id);

// Функція згортання випадаючого меню 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const [...dropdowns] = document.getElementsByClassName("dropdown-content");
    dropdowns.forEach((item)=>{
      if (item.classList.contains('show')){
        item.classList.remove('show');
      };
    });
  };
};

// Кнопка випадаючого меню. 
get("btnShowMenu").onclick = () => {get("myDropdown").classList.toggle("show")};


// Оголошення змінних "слайдера".
let slideIndex = 0;
const slides = document.getElementsByClassName("slide"),

// Функція "слайдер" змінює картинки кожні 3 секунди.
showSlides = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show-slide');  
    }
    slideIndex++;
    if (slideIndex === slides.length) {
        slideIndex = 0;
    } 
    slides[slideIndex].classList.add('show-slide');
    // Таймер "слайдера".
    setTimeout(showSlides, 5000); 
};
// Виклик функції "слайдер" після завантаження сторінки.
window.addEventListener('load',showSlides);

// Виклик функції "слайдер".
// showSlides();
