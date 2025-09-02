(function() {
  "use strict";

  // ---------------- пагинатор "а нет показалось"

  document.addEventListener("DOMContentLoaded", function() {
    const paginatorLinks = document.querySelectorAll('.js_home_paginator');
    const pictures = document.querySelectorAll('.js-pic');
    const years  = document.querySelectorAll('.js-year');

    paginatorLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Получаем номер изображения из атрибута data-img
        const imgNumber = this.getAttribute('data-img');

        // Скрываем все картинки
        pictures.forEach(pic => {
            pic.style.display = 'none';
        });

        // Показываем только выбранную картинку
        const selectedPic = document.querySelector(`.js-pic[data-img="${imgNumber}"]`);
        if (selectedPic) {
            selectedPic.style.display = 'block';
        }

         // Убираем класс active у всех ссылок
        paginatorLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Добавляем класс active к выбранной ссылке
        this.classList.add('active');

        // Меняем год на соответствующий
        years.forEach(year => {
            year.style.display = 'none'; // Скрываем все года
        });
        // Показываем только выбранный год
        const selectedYear = document.querySelector(`.js-year[data-img="${imgNumber}"]`);
        if (selectedYear) {
            selectedYear.style.display = 'inline';
        }
      });
    });
  });

  // ---------------- пагинатор "а нет показалось"
  
  $(".slider__owl").owlCarousel({
    loop: true, // Зацикливать слайд
    margin: 0, // Отступ между элементами
    center: true, // Центрировать текущий элемент
    nav: true, // Включить навигационные стрелки
    dots: false, // Отключить точки навигации
    navText: [
      // HTML для навигационных стрелок
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
        <path d="M28.25 30.25L24.75 27L28.25 23.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
        <path d="M25.75 23.75L29.25 27L25.75 30.25" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    ],
    autoplay: false, // Отключить автоматическую прокрутку
    smartSpeed: 1000, // Скорость анимации
    autoplayTimeout: 6000, // Время ожидания между автоматическими прокрутками
    // animateOut: "fadeOut", // Комментарий: можно добавить анимацию при выходе
    responsive: {
      // Адаптивность: количество выводимых элементов при определенной ширине
      0: {
        items: 1, // 1 элемент при ширине 0-767px
      },
      768: {
        items: 3, // 3 элемента при ширине 768-1339px
        autoWidth: true, // Автоматическая ширина для элементов
      },
      1340: {
        items: 5, // 5 элементов при ширине 1340px и выше
      },
    },
  });

})();

  