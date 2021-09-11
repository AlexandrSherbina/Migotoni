console.log('TEst');

 //==chartist js==========================//
 const count = 45;
 const max = 100;
 


let data = {
  labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март" , "Апрель", "Май", "Июнь"],
    series: [
    [1 , 33.5, 80]
   
  ]
};

let options = {
 height: 600,
  seriesBarDistance: 60,

  //stackBars: true,
  axisY: {   
    //onlyInteger: true,    
    offset: 60,
    labelInterpolationFnc: function(value) {
      return  value +'%';
    }
  },

  
};

let responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);



// ==Chart============================================================//
// let densityCanvas = document.getElementById("chart-price");
// Chart.defaults.font.size = 30;



// let case1 = {
//   label: 'Изменение цены за месяц',
//   data: [ 0, 33.5, 80 ],
//   backgroundColor: 'rgba(48, 207, 208, 0.6)',
//   borderWidth: 1,

// };


// let casetData = {
//   labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март" , "Апрель", "Май", "Июнь"],
//   datasets: [case1]
// };

// let chartOptions = {
//   scales: {
//     y: {
//         ticks: {
        
//             callback: function(value, index, values) {
//                 return  value + '%';
//             }
//         }},
//     xAxes: [{
//       barPercentage: 1,
//       categoryPercentage: 0.6
//     }],   

//   },
//   plugins: {
//     legend: {
//         labels: {
//             font: {
//                 size: 30
//             }
//         }
//     }
//     }
// };

// let barChart = new Chart(densityCanvas, {
//   type: 'bar',
//   data: casetData,
//   options: chartOptions
// });
