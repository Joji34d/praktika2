$(document).ready(function() {
    $('.frame-7 span').click(function() {
      var buttonText = $(this).text();
      var url;
  
      // Определить URL в зависимости от текста кнопки
      switch(buttonText) {
        case 'Главная':
          url = 'https://example.com/home';
          break;
        case 'Штукатурка фасадов':
          url = 'https://example.com/plastering-facades';
          break;
        case 'Галерея':
          url = 'https://example.com/gallery';
          break;
        case 'Карта объектов':
          url = 'https://example.com/map-objects';
          break;
        case 'Информация':
          url = 'https://example.com/information';
          break;
        case 'О компании':
          url = 'https://example.com/about-company';
          break;
        case 'Контакты':
          url = 'https://example.com/contacts';
          break;
        default:
          url = 'https://example.com';
      }
  
      // Переход на новый сайт
      window.location.href = url;
    });
  });
  

  $(document).ready(function() {
    $('.calculator').click(function() {
      // Определить URL для калькулятора
      var calculatorUrl = 'https://example.com/calculator';
      
      // Переход на страницу калькулятора
      window.location.href = calculatorUrl;
    });
  });

  
  $(document).ready(function() {
    $('.order-call-back').click(function() {
      // Действие при клике на кнопку "Заказать обратный звонок"
      // Например, открытие модального окна с формой заказа обратного звонка
      alert('Открывается форма заказа обратного звонка...');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelector('.details');
    const frame = document.querySelector('.frame-28');

    details.addEventListener('click', function(event) {
      event.stopPropagation(); // Останавливаем всплытие события
      frame.style.transform = 'scale(1.1)';
      setTimeout(function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // URL для перехода
      }, 300); // Время анимации должно совпадать с CSS
    });

    frame.addEventListener('click', function() {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // URL для страницы видео
    });
  });
  

  // Сначала получаем все элементы span
  const spans = document.querySelectorAll('.frame-1f8 span');

  // Затем добавляем класс 'show' для каждого элемента span с задержкой
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add('show');
    }, 500 * index); // Задержка будет увеличиваться на каждом шаге
  });

  // Добавляем обработчик события для кнопки
  document.querySelector('.submit').addEventListener('click', function() {
    // Получаем значения из текстовых полей
    const name = document.querySelector('.your-name').value;
    const phoneNumber = document.querySelector('.phone-number-6f').value;
    
    // Здесь вы можете выполнить действия с полученными значениями, например, отправить их на сервер или выполнить другую логику
    // В данном примере просто выполним переадресацию на другую страницу
    // Замените 'новая_страница.html' на URL вашей целевой страницы
    window.location.href = 'новая-страница.html';
  });

  document.getElementById('orderCallBackButton').addEventListener('click', function(event) {
    event.preventDefault(); // Останавливаем стандартное действие (переход по ссылке)
    alert('Вы будете перенаправлены на другой сайт');
    window.location.href = this.href; // Переход по ссылке
  });

  $('.slider1').mobilyslider();
  

  // Получаем кнопку выпадающего списка
var dropdownBtn = document.querySelector('.dropbtn');

// Получаем контейнер с выпадающим списком
var dropdownContent = document.querySelector('.dropdown-content');

// Получаем все пункты меню
var dropdownItems = document.querySelectorAll('.dropdown-content a');

// Добавляем обработчик события клика по кнопке
dropdownBtn.addEventListener('click', function() {
  // Переключаем видимость выпадающего списка
  dropdownContent.classList.toggle('show');
});

// Добавляем обработчик события клика по каждому пункту меню
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Получаем текст пункта меню и выводим его в консоль (или выполняем другие действия)
    var selectedAction = item.textContent;
    console.log('Выбрано действие: ' + selectedAction);
    // Закрываем выпадающий список после выбора пункта
    dropdownContent.classList.remove('show');
  });
});

// Закрываем выпадающий список при клике за его пределами
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});


// Получаем кнопку выпадающего списка
var dropdownBtn = document.querySelector('.dropbtn');

// Получаем контейнер с выпадающим списком
var dropdownContent = document.querySelector('.dropdown-content');

// Получаем все пункты меню
var dropdownItems = document.querySelectorAll('.dropdown-content a');

// Добавляем обработчик события клика по кнопке
dropdownBtn.addEventListener('click', function() {
  // Переключаем видимость выпадающего списка
  dropdownContent.classList.toggle('show');
});

// Добавляем обработчик события клика по каждому пункту меню
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Получаем текст пункта меню и выводим его в консоль (или выполняем другие действия)
    var selectedAction = item.textContent;
    console.log('Выбрано действие: ' + selectedAction);
    // Закрываем выпадающий список после выбора пункта
    dropdownContent.classList.remove('show');
  });
});

// Закрываем выпадающий список при клике за его пределами
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});


// Получаем кнопку выпадающего списка
var dropdownBtn = document.querySelector('.dropbtn');

// Получаем контейнер с выпадающим списком
var dropdownContent = document.querySelector('.dropdown-content');

// Получаем все пункты меню
var dropdownItems = document.querySelectorAll('.dropdown-content a');

// Добавляем обработчик события клика по кнопке
dropdownBtn.addEventListener('click', function() {
  // Переключаем видимость выпадающего списка
  dropdownContent.classList.toggle('show');
});

// Добавляем обработчик события клика по каждому пункту меню
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Получаем текст пункта меню и выводим его в консоль (или выполняем другие действия)
    var selectedAction = item.textContent;
    console.log('Выбрано действие: ' + selectedAction);
    // Закрываем выпадающий список после выбора пункта
    dropdownContent.classList.remove('show');
  });
});

// Закрываем выпадающий список при клике за его пределами
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Получаем все элементы иконок
  const icons = document.querySelectorAll('.frame-1fe .div');

  // Перебираем каждую иконку и добавляем обработчик события для перехода на сайт при нажатии
  icons.forEach(icon => {
    icon.addEventListener('click', function() {
      window.location.href = 'https://example.com'; // Укажите ваш URL
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const materialsDropdown = document.getElementById("materialsDropdown");
  const materialsButton = document.querySelector(".materials");

  // Функция для показа/скрытия выпадающего списка
  function toggleDropdown() {
      materialsDropdown.classList.toggle("show");
  }

  // Обработчик события клика по кнопке "Материалы"
  materialsButton.addEventListener("click", toggleDropdown);

  // Обработчик события клика по документу для скрытия списка при клике вне его
  document.addEventListener("click", function(event) {
      if (!event.target.matches('.materials')) {
          if (materialsDropdown.classList.contains('show')) {
              materialsDropdown.classList.remove('show');
          }
      }
  });
});


 // Получаем все элементы с классом "frame-*" (блоки)
 const frames = document.querySelectorAll('[class^="frame-"]');

 // Перебираем каждый блок
 frames.forEach(frame => {
   // Находим внутри блока элемент выпадающего списка
   const dropdown = frame.querySelector('.dropdown-content');

   // Показываем выпадающий список при наведении на блок
   frame.addEventListener('mouseover', () => {
     dropdown.style.display = 'block';
   });

   // Скрываем выпадающий список при уводе курсора с блока
   frame.addEventListener('mouseout', () => {
     dropdown.style.display = 'none';
   });
 });