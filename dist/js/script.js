// ==Chart============================================================//
let densityCanvas = document.getElementById("densityChart");

//Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.font.size = 24;
let newNum = 20;
let keys1 =( ( newNum -   15 ) / (15 * 100 / 100)) + 1;
console.log( keys1.toFixed(4)); 


let case1 = {
  label: 'Кейс 14000 - 27999 грн',
  data: [ 22.5, 33.5 ],
  backgroundColor: 'rgba(0, 99, 132, 0.6)',
  borderWidth: 0,
//   yAxisID: "y-axis-density"
};

let case2 = {
  label: 'Кейс 28 000 - 67 999 ГРН',
  data: [14.4, 33.33],
  backgroundColor: 'rgba(99, 132, 0, 0.6)',
  borderWidth: 0,
//   yAxisID: "y-axis-gravity"
};

let case3 = {
  label: 'Кейс 68 000 - 139 999 ГРН',
  data: [0.8, 44.44],
  backgroundColor: 'rgba(246, 161, 65, 0.6)',
  borderWidth: 0,
//   yAxisID: "y-axis-gravity"
};

let case4 = {
  label: 'Кейс 140 000 - 279 999 ГРН',
  data: [0.5, 42.9],
  backgroundColor: 'rgba(41, 35, 225, 0.6)',
  borderWidth: 0,
//   yAxisID: "y-axis-gravity"
};

let case5 = {
  label: 'Кейс 280 000 ГРН',
  data: [0.3, 40],
  backgroundColor: 'rgba(225, 41, 35, 0.6)',
  borderWidth: 0,
//   yAxisID: "y-axis-gravity"
};

let casetData = {
  labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март" , "Апрель", "Май", "Июнь"],
  datasets: [case1, case2, case3, case4, case5]
};

let chartOptions = {
  scales: {
    y: {
        ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
                return  value + '%';
            }
        }},
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],   
    // yAxes: [{
    //   id: "y-axis-density"
    // }, {
    //   id: "y-axis-gravity"
    // }]
  },
  plugins: {
    legend: {
        labels: {
            // This more specific font property overrides the global property
            font: {
                size: 16
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
