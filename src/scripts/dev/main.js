(function () {
    "use strict";

  // --------------- Изменяем навигационную панель для < 1020px ------------------

   const root = document.documentElement;
  // Находим элемент навигации с id "js-navToggle"
  const navToggle = document.querySelector("#js-navToggle")

  // Добавляем обработчик события "click" на элемент navToggle
  navToggle.addEventListener("click", function() {
    // Переключаем класс "show-nav" (mixins.less)
    root.classList.toggle("show-nav");
  });


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


  // --- карусель в детальной Энди Маус

  $(".product-page__related").owlCarousel({
    loop: true,
    margin: 0,
    center: false,
    nav: true,
    dots: false,
    navText: [
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
        <path d="M28.25 30.25L24.75 27L28.25 23.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
        <path d="M25.75 23.75L29.25 27L25.75 30.25" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
    ],
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    items: 4,
    //animateOut: "fadeOut",
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1339: {
        items: 4,
      },
    },
  });

  // ---------------- Открытие/закрытие "Фильтр" в каталоге -----------------------------

  $(".js-open-filter").on("click", function (e) {
    e.preventDefault();
    $(".catalog_hide-menu").addClass("active");
  });

  $(".js-close-filter").on("click", function (e) {
    e.preventDefault();
    $(".catalog_hide-menu").removeClass("active");
  });

  //------------------- Покрасить сердечко catalog ---------------------------

  // Функция для изменения цвета сердца по его id
  function toggleHeartColor(id) {
    const heart = document.getElementById(id);
    console.log(heart);
    const path = heart.querySelector('path');
    const currentFill = path.getAttribute('fill');
    console.log("start", currentFill);

    // Проверяем текущий цвет заливки и меняем его
    if (currentFill === 'none' || currentFill === null) {
      console.log("1", currentFill);
      path.setAttribute('fill', 'blue'); // Меняем на синий
      path.setAttribute('stroke', 'blue'); // Меняем цвет обводки на синий
    }
    else {
      console.log("3", currentFill);
      path.setAttribute('fill', 'none'); // Возвращаем на прозрачный
      path.setAttribute('stroke', '#111111'); // Возвращаем цвет обводки на черный
    }
  }

  // Добавляем обработчики событий для каждого сердца
  document.getElementById('heart1').parentNode.addEventListener('click', function() {toggleHeartColor('heart1');});
  document.getElementById('heart2').parentNode.addEventListener('click', function() {toggleHeartColor('heart2');});
  document.getElementById('heart3').parentNode.addEventListener('click', function() {toggleHeartColor('heart3');});
  document.getElementById('heart4').parentNode.addEventListener('click', function() {toggleHeartColor('heart4');});
  document.getElementById('heart5').parentNode.addEventListener('click', function() {toggleHeartColor('heart5');});
  document.getElementById('heart6').parentNode.addEventListener('click', function() {toggleHeartColor('heart6');});
  document.getElementById('heart7').parentNode.addEventListener('click', function() {toggleHeartColor('heart7');});
  document.getElementById('heart8').parentNode.addEventListener('click', function() {toggleHeartColor('heart8');});
  document.getElementById('heart9').parentNode.addEventListener('click', function() {toggleHeartColor('heart9');});
  document.getElementById('heart10').parentNode.addEventListener('click', function() {toggleHeartColor('heart10');});
  document.getElementById('heart11').parentNode.addEventListener('click', function() {toggleHeartColor('heart11');});
  document.getElementById('heart12').parentNode.addEventListener('click', function() {toggleHeartColor('heart12');});



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

  // --- Слайдер для диапазона цен
  $("#slider-range").slider({
    range: true,
    min: 1,
    max: 8500,
    values: [650, 5000],
    slide: function (event, ui) {
      $("#amount .t1").text("от " + ui.values[0]);
      $("#amount .t2").text("до " + ui.values[1]);
    },
  });
  $("#amount .t1").text("от " + $("#slider-range").slider("values", 0));
  $("#amount .t2").text("до " + $("#slider-range").slider("values", 1));

  //------- Открытие изображений в попапе -------

  $('.js-open-img').on('click', function (e) {
    e.preventDefault();
    let img = $(this).attr('href');
    $('body').addClass('show-event-popup');
  });

  $('.pp-window__close, .pp-window__background').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('show-event-popup');
  });

  //------ Кастомизация селекта ---------

  const jsSelectric = $(".js-selectric");
  if (jsSelectric.length) {
    jsSelectric.selectric({
      nativeOnMobile: false,
    });
  }

  //---------- Маска для мобильного номера -------------

  const mobileMask = $(".js-mobileMask");
  if (mobileMask.length) {
    mobileMask.mask("+7 (000) 000 00 00", {
      placeholder: "+7 (___) ___ __ __",
    });
  }

  // ------ Инициализация календаря -------

  const dateField = $(".js-dateField");
  if (dateField.length) {
    const pickerInit = function (pick) {
      const dateInput = pick.find(".js-dateInput");
      const dateDay = pick.find(".js-dateDay");
      const dateMonth = pick.find(".js-dateMonth");
      const dateYear = pick.find(".js-dateYear");
      const dateConfig = {
        autoClose: true,
        minDate: new Date(),
        navTitles: {
          days: "MMMM <i>yyyy</i>",
        },
        onSelect: function ({ date }) {
          dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
          dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
          dateYear.val(date ? date.getFullYear() : "");
        },
      };
      new AirDatepicker(dateInput[0], dateConfig);
    };
    $.each(dateField, function (i) {
      pickerInit($(this));
    });
  }


})();

  