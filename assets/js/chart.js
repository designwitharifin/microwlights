// window.Apex = {
//     chart: {
//         foreColor: "#323232",
//         toolbar: {
//             show: false
//         }
//     },
//     colors: ["#FACC15", "#551CFF", "#FD4141", "#4ADE80"],
//     stroke: {
//         curve: 'smooth',
//         width: [4, 4]
//     },
//     dataLabels: {
//         enabled: false
//     },
//     grid: {
//         borderColor: false,
//     },
//     xaxis: {
//         axisTicks: {
//             color: "#CBD5E0"
//         },
//         axisBorder: {
//             color: "#CBD5E0"
//         }
//     },
//     fill: {
//         type: "fill",
//     },
//     tooltip: {
//         theme: "light",
//         x: {
//             formatter: function (val) {
//                 return moment(new Date(val)).format("HH:mm:ss");
//             }
//         }
//     },
//     yaxis: {
//         decimalsInFloat: 2,
//         opposite: true,
//         labels: {
//             offsetX: -10
//         }
//     }
// };

// var trigoStrength = 3;
// var iteration = 11;

// function getRandom() {
//     var i = iteration;
//     return (
//         (Math.sin(i / trigoStrength) * (i / trigoStrength) +
//             i / trigoStrength +
//             1) *
//         (trigoStrength * 2)
//     );
// }


// function generateMinuteWiseTimeSeries(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//         var x = baseval;
//         var y =
//             (Math.sin(i / trigoStrength) * (i / trigoStrength) +
//                 i / trigoStrength +
//                 1) *
//             (trigoStrength * 2);

//         series.push([x, y]);
//         baseval += 300000;
//         i++;
//     }
//     return series;
// };

// var optionsLine = {
//     chart: {
//         height: 350,
//         type: "line",
//         stacked: true,
//         animations: {
//             enabled: true,
//             easing: "linear",
//             dynamicAnimation: {
//                 speed: 1000
//             }
//         },
//         dropShadow: {
//             enabled: true,
//             opacity: 0.3,
//             blur: 5,
//             left: -7,
//             top: 22
//         },
//         events: {
//             animationEnd: function (chartCtx) {
//                 const newData1 = chartCtx.w.config.series[0].data.slice();
//                 newData1.shift();
//                 const newData2 = chartCtx.w.config.series[1].data.slice();
//                 newData2.shift();
//                 window.setTimeout(function () {
//                     chartCtx.updateOptions(
//                         {
//                             series: [
//                                 {
//                                     data: newData1
//                                 },
//                                 {
//                                     data: newData2
//                                 }
//                             ],
//                             subtitle: {
//                                 text: parseInt(getRandom() * Math.random()).toString()
//                             }
//                         },
//                         false,
//                         false
//                     );
//                 }, 300);
//             }
//         },
//         toolbar: {
//             show: false
//         },
//         zoom: {
//             enabled: false
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: "straight",
//         width: 5
//     },
//     grid: {
//         padding: {
//             left: 0,
//             right: 0
//         }
//     },
//     markers: {
//         size: 0,
//         hover: {
//             size: 0
//         }
//     },
//     series: [
//         {
//             name: "Running",
//             data: generateMinuteWiseTimeSeries(
//                 new Date("12/12/2016 00:20:00").getTime(),
//                 12,
//                 {
//                     min: 30,
//                     max: 110
//                 }
//             )
//         },
//         {
//             name: "Waiting",
//             data: generateMinuteWiseTimeSeries(
//                 new Date("12/12/2016 00:20:00").getTime(),
//                 12,
//                 {
//                     min: 30,
//                     max: 110
//                 }
//             )
//         }
//     ],
//     xaxis: {
//         type: "datetime",
//         range: 2700000
//     },
//     title: {
//         text: "Process",
//         align: "left",
//         style: {
//             fontSize: "12px",
//             fontFamily: "Nunito"
//         }
//     },
//     subtitle: {
//         text: "20",
//         floating: true,
//         align: "right",
//         offsetY: 0,
//         style: {
//             fontSize: "22px",
//             fontFamily: "Nunito"
//         }
//     },
//     legend: {
//         show: true,
//         floating: true,
//         horizontalAlign: "left",
//         onItemClick: {
//             toggleDataSeries: false
//         },
//         position: "top",
//         offsetY: -33,
//         offsetX: 60
//     }
// };

// var chartLine = new ApexCharts(
//     document.querySelector("#linechart"),
//     optionsLine
// );





