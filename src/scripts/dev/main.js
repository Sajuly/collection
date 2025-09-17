(function () {
    "use strict";

    // --------------- Изменяем навигационную панель для < 1020px ------------------

    const root = document.documentElement;
    // Находим элемент навигации с id "js-navToggle"
    const navToggle = document.querySelector("#js-navToggle")

    // Добавляем обработчик события "click" на элемент navToggle
    navToggle.addEventListener("click", function () {
        // Переключаем класс "show-nav" (mixins.less)
        root.classList.toggle("show-nav");
    });


    // ---------------- пагинатор "а нет показалось" --------------

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

    // ---------------- Слайдер ----------------

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
            1799: {
                items: 5, // 5 элементов при ширине 1340px и выше
            },
        },
    });

    // --- карусель в детальной Энди Маус ----------------

    $(".product_carousel__related").owlCarousel({
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
            400: {
                items: 2,
            },
            768: {
                items: 4,
            }
        },

    });

    // ---------------- Открытие/закрытие "Фильтр" в каталоге -----------------------------

    $(".js-open-filter").on("click", function (element) {
        element.preventDefault();
        $(".catalog_hide-menu").addClass("active");
    });

    $(".js-close-filter").on("click", function (element) {
        element.preventDefault();
        $(".catalog_hide-menu").removeClass("active");
    });

    //-------------------Закрасить и посчитать сердечки catalog ---------------------------

    function toggleHeartColor(id, head_id, counter) {
        const heart = document.getElementById(id);
        const path = heart.querySelector('path');
        const currentFill = path.getAttribute('fill');

        const h_id = document.getElementById(head_id);
        const h_path = h_id.querySelector('path');

        // Получаем текущий счетчик
        const countElement = document.getElementById(counter);
        let count = parseInt(countElement.textContent);


        // Проверяем текущий цвет заливки и меняем его
        if (currentFill === 'none' || currentFill === null) {
            path.setAttribute('fill', '#4497e4'); // Меняем на синий
            path.setAttribute('stroke', '#4497e4'); // Меняем цвет обводки на синий
            count += 1; // Увеличиваем счетчик
        } else {
            path.setAttribute('fill', 'none'); // Возвращаем на прозрачный
            path.setAttribute('stroke', '#111111'); // Возвращаем цвет обводки на черный
            count -= 1; // Уменьшаем счетчик
        }

        // Обновляем текст счетчика
        countElement.textContent = count;

        // Меняем цвет сердца в зависимости от счетчика
        if (count > 0) {
            h_path.setAttribute('fill', '#4497e4'); // Синее, если больше нуля
            h_path.setAttribute('stroke', '#4497e4');
            countElement.style.color = '#111111'; // Показываем счетчик
        } else {
            h_path.setAttribute('fill', 'none'); // Прозрачное, если 0
            h_path.setAttribute('stroke', '#111111');
            countElement.style.color = '#F3F3F3'; // Скрываем счетчик
        }
    }

    // Добавляем обработчики событий для каждого сердца
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 1; i <= 12; i++) {
            const heart = document.getElementById(`heart${i}`);
            if (heart) { // Проверяем, существует ли элемент
                heart.addEventListener('click', function (event) {
                    event.stopPropagation(); // Останавливаем всплытие события
                    toggleHeartColor(`heart${i}`, `head_heart`, `heartCount`);
                });
            }
        }
    });

    // Добавляем обработчики событий для каждой тележки
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 1; i <= 12; i++) {
            const heart = document.getElementById(`cart${i}`);
            if (heart) { // Проверяем, существует ли элемент
                heart.addEventListener('click', function (event) {
                    event.stopPropagation(); // Останавливаем всплытие события
                    toggleHeartColor(`cart${i}`, `head_cart`, `cartCount`);
                });
            }
        }
    });


    //--------------- Кол-во +/- 1 ---------------------------

    document.addEventListener('DOMContentLoaded', function () {
        const plusButton = document.getElementById('plus');
        const minusButton = document.getElementById('minus');
        const quantityInput = document.getElementById('quantityInput');

        plusButton.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1; // Увеличиваем значение на 1
        });

        minusButton.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) { // Не допускаем уменьшения ниже 1
                quantityInput.value = currentValue - 1; // Уменьшаем значение на 1
            }
        });
    });

    // ---------------- Google map -----------------------------

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

    // --- Слайдер для диапазона цен ---------------

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

    const select = $(".js-select");
    if (select.length) {
        select.selectric({
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

    // ------ Календаря -------

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
                onSelect: function ({date}) {
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

  