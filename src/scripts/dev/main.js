(function () {
    "use strict";

    // ---------------- пагинатор "а нет показалось"

    document.addEventListener("DOMContentLoaded", function () {
        const paginatorLinks = document.querySelectorAll('.js_home_paginator');
        const pictures = document.querySelectorAll('.js-pic');
        const years = document.querySelectorAll('.js-year');

        paginatorLinks.forEach(link => {
            link.addEventListener('click', function (event) {
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

    // ---------------- Слайдер

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

  // ---------------- Google map -----------------------------

// Получаем все элементы с классом "js-address" и добавляем обработчик события на клик
document.querySelectorAll(".js-address").forEach((addressElement) => {
  addressElement.addEventListener("click", function (event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();
    // Координаты по умолчанию
    const defaultCoordinates = "56.490202, 84.949185";

    // Получаем координаты из атрибутов данных элемента
    const coordinate1 = this.dataset.coord1;
    const coordinate2 = this.dataset.coord2;
    const mapUrl = `${coordinate1},${coordinate2}`; // Формируем строку с координатами
    console.log(mapUrl);

    // Убираем класс "active" у всех адресов и добавляем его к текущему
    document.querySelectorAll(".js-address").forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    // Инициализируем карту с текущими координатами
    initMap(coordinate1, coordinate2);
  });
});

// Инициализация карты с координатами по умолчанию
initMap("56.490202", "84.949185");

// Функция для инициализации карты
function initMap(latitude, longitude) {
  const mapContainer = document.querySelector("#js-contactsMap"); // Контейнер для карты
  if (mapContainer) {
    const mapCenter = new google.maps.LatLng(latitude, longitude); // Центр карты
    const mapOptions = {
      center: mapCenter,
      disableDefaultUI: true, // Отключаем стандартные элементы управления
      draggable: true, // Позволяем перетаскивать карту
      gestureHandling: "cooperative", // Управление жестами
      scrollwheel: false, // Отключаем прокрутку колесиком мыши
      zoom: 17, // Уровень масштабирования
      zoomControl: true, // Включаем управление масштабированием
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM, // Позиция кнопки управления масштабированием
      },
    };

    // Создаем карту
    const map = new google.maps.Map(mapContainer, mapOptions);
    const markerPosition = new google.maps.LatLng(latitude, longitude); // Позиция маркера
    const markerIcon = "../assets/images/map-pointer.png"; // Иконка маркера

    // Создаем маркер на карте
    new google.maps.Marker({
      position: markerPosition,
      map: map,
      icon: markerIcon,
      title: "collection", // Заголовок маркера
    });
  }
}


})();

  