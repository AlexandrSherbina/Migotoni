// ==Chart============================================================//
let densityCanvas = document.getElementById("chart-price");

//Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.font.size = 30;
// let newNum = 20;
// let keys1 =( ( newNum -   15 ) / (15 * 100 / 100)) + 1;
// console.log( keys1.toFixed(4)); 


let case1 = {
  label: 'Изменение цены за месяц',
  data: [ 0, 33.5, 80 ],
  backgroundColor: 'rgba(48, 207, 208, 0.6)',
  //background: "linear-gradient(180deg, #30CFD0 0%, #330867 100%)",
  borderWidth: 1,
//   yAxisID: "y-axis-density"
};


let casetData = {
  labels: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март" , "Апрель", "Май", "Июнь"],
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
