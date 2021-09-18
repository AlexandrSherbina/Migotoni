
//= Form===========================//

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//       e.preventDefault();
//       let error = formValidate(form);

//       let formData = new FormData(form);

//       if (error === 0) {
//         form.classList.add('_sending');

//         let response = await fetch('sendmail.php', {
//           method: 'POST',
//           body: formData
//         } );

//         if (response.ok) {
//           let result = await response.json();
//           alert(result.messsage);
//           //formPreview.innerHTML = '';
//           form.reset();
//           form.classList.remove('_sending');
//         } else {
//           alert('Ошибка');
//           form.classList.remove('_sending');
//         }

//       } else {
//         alert('Заполните обязательные поля');
//       }
//     }

//     function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll('._req');

//       for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);

//         if (input.classList.contains('_email')) {
//             if (emailText(input)) {
//               formAddError(input);
//               error++;
//             }
//         } else if( input.getAttribute('type') === "checkbox" && input.checked === false) {
//           formAddError(input);
//           error++;
//         } else {
//             if (input.value === '') {
//               formAddError(input);
//               error++;
//             }
//         }
        
//       }

//       return error;
//     }

//     function formAddError(input) {
//       input.parentElement.classList.add('_error');
//       input.classList.add('_error');
//     }

//     function formRemoveError(input) {
//       input.parentElement.classList.remove('_error');
//       input.classList.remove('_error');
//     }



// });


 //==chartist js==========================//
//  const count = 45;
//  const max = 100;
 


// let data = {
//   labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март" , "Апрель", "Май", "Июнь"],
//     series: [
//     [1 , 33.5, 80]
   
//   ]
// };

// let options = {
//  height: 600,
//   seriesBarDistance: 60,

//   //stackBars: true,
//   axisY: {   
//     //onlyInteger: true,    
//     offset: 60,
//     labelInterpolationFnc: function(value) {
//       return  value +'%';
//     }
//   },

  
// };

// let responsiveOptions = [
//   ['screen and (min-width: 641px) and (max-width: 1024px)', {
//     seriesBarDistance: 10,
//     axisX: {
//       labelInterpolationFnc: function (value) {
//         return value;
//       }
//     }
//   }],
//   ['screen and (max-width: 640px)', {
//     seriesBarDistance: 5,
//     axisX: {
//       labelInterpolationFnc: function (value) {
//         return value[0];
//       }
//     }
//   }]
// ];

// new Chartist.Bar('.ct-chart', data, options, responsiveOptions);



// ==Chart============================================================//
let densityCanvas = document.getElementById("chart-price");
Chart.defaults.font.size = 30;



let case1 = {
  label: '',
  data: [ 0, 33.5, 80 ],
  backgroundColor: 'rgba(48, 207, 208, 0.6)',
  borderWidth: 1,

};


let casetData = {
  labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  datasets: [case1]
};

let chartOptions = {
  scales: {
    y: {
        ticks: {
        
            callback: function(value, index, values) {
                return  value + '%';
            }
        }},
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],   

  },
  plugins: {
    legend: {
        labels: {
            font: {
                size: 30
            }
        }
    }
    }
};

let barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: casetData,
  options: chartOptions
});


//=====feed-form=====================//

// document.getElementById('form-feed').addEventListener('submit', function (e) {
//    e.preventDefault();
// });

// Modal

$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close, .back-home').on('click', function () {
   $('.overlay, #consultation, #thanks').fadeOut('slow');
});


$('#consultation form').validate({
  rules: {
    firstName:  {
      required: true,
      minlength: 2
    },
   lastName: "required",
    phone: "required"
  },
  messages: {
    firstName: 
    {
      required: "Пожалуйста введите свою фамилию",
      minlength: jQuery.validator.format("Введите {0} символа!")
    },
   lastName: "Пожалуйста введите свое имя",
    phone: "Пожалуйста введите свой телефон",
    email: {
      required: "Пожалуйста введите свою почту",
      email: "Неправильно введен адресс почты name@domain.com"
    }
  }
});

function validateForms(form) {
  $(form).validate({
    rules: {
      firstName:  {
        required: true,
        minlength: 2
      },
     lastName: "required",
      phone: "required"
    },
    messages: {
      firstName: 
      {
        required: "Пожалуйста введите свою фамилию",
        minlength: jQuery.validator.format("Введите {0} символа!")
      },
     lastName: "Пожалуйста введите свое имя",
      phone: "Пожалуйста введите свой телефон",
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Неправильно введен адресс почты name@domain.com"
      }
    }
  });
}

validateForms('#consultation form');

$('input[name=phone]').mask("+38(999) 999-99-99");



// $('form').submit(function(e) {
//   e.preventDefault();
//   $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize()
//   }).done(function() {
    
//       $(this).find("input").val("");
//       $('#consultation').fadeOut();
//       $('.overlay, #thanks').fadeIn('slow');

//       $('form').trigger('reset');
//   });
//   return false;
// });

//======feed-form========================//

$(function() {
  $(".feed-form").submit(function (event) {
    if($(".reg").val() == "") return;
        event.preventDefault();
 
    // Ссылка, которую получили на этапе публикации приложения
    let appLink = "https://script.google.com/macros/s/AKfycbxTPyLeeXoEC7z1x71TtTEfoV9QkzmKkgOy_g6H-Q/exec";
 
    // Сообщение при успешной отправке данных
    let successRespond = 'Сообщение успешно отправлено. Посмотрите результат <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ct9vdiOK4GgQ99UFcC7eDSjW6pfiCGNR4KysMPJn7z4/edit?usp=sharing">тут</a>';
 
    // Сообщение при ошибке в отправке данных
    let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:landing.migotoni@gmail.com">landing.migotoni@gmail.com</a>';
 
    // Id текущей формы
    let form = $('#' + $(this).attr('id'))[0];
 
    // h2 с ответом формы
    let formRespond = $(this).find('.g-form__title_respond');
 
    // h2 с заголовком формы
    let formTitle = $(this).find('.modal__subtitle'); 
 
    // Блок прелоадера
    let preloader = $(this).find('.g-form__preloader');
 
    // Кнопка отправки формы
    let submitButton = $(this).find('.btn_submit-push');
 

    // FormData
    let fd = new FormData(form);
     
       
    $.ajax({
 
      url: appLink,
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: function(){
 
        if(fd.get('honeypot').length) {
          return false;
        } else {
          fd.delete('honeypot');
        }
 
      // Показываем прелоадер
      preloader.css('opacity', '1');
 
      // Делаем неактивной кнопку отправки
      submitButton.prop('disabled', true);
 
      // валидация других полей.
 
    },
 
  }).done(function(res, textStatus, jqXHR) {
 
    if(jqXHR.readyState === 4 && jqXHR.status === 200) {
 
    // Прячем заголовок формы
    formTitle.css({
      'display': 'none'
    });
 
    // Прячем прелоадер
    preloader.css('opacity', '0');
 
    // Выводим ответ формы.
    formRespond.html(successRespond).css('color', '#37b599');
     
    // Возвращаем активность кнопке отправки
    submitButton.prop('disabled', false);
    
          $('#consultation').fadeOut();
           $('.overlay, #thanks').fadeIn('slow');
             $('form').trigger('reset');
      // Очищаем поля формы
     // form.reset();
 
    } else {
      formTitle.css({
        'display': 'none'
      });
      formRespond.html(errorRespond).css('color', '#c64b4b');
      preloader.css('opacity', '0');
      setTimeout( () => {
        formRespond.css({
          'display': 'none'
        });
        formTitle.css({
          'display': 'block'
        });
 
        submitButton.prop('disabled', false);
      }, 5000);
 
      console.log('Гугл не ответил статусом 200');
    }
  }).fail(function(res, textStatus, jqXHR) {
    formTitle.css({
      'display': 'none'
    });
    preloader.css('opacity', '0');
    formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
    setTimeout( () => {
      formRespond.css({
        'display': 'none'
      });
      formTitle.css({
        'display': 'block'
      });
      submitButton.prop('disabled', false); 
    }, 5000);
 
    console.log('Не удалось выполнить запрос по указанному в скрипте пути');
  }); 
});
}(jQuery));