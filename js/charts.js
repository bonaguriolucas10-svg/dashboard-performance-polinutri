/* ==========================================================
   POLINUTRI PERFORMANCE DASHBOARD
   Wave 002
   charts.js
========================================================== */

let gpdChart = null;
let caChart = null;

function destroyCharts() {

    if (gpdChart) {
        gpdChart.destroy();
        gpdChart = null;
    }

    if (caChart) {
        caChart.destroy();
        caChart = null;
    }

}

function buildCharts() {

    destroyCharts();

    buildGPDChart();

    buildCAChart();

}

function buildGPDChart() {

    const ctx = document
        .getElementById("chartGPD")
        .getContext("2d");

    const history = filterGPDHistory();

    gpdChart = new Chart(ctx,{

        type:"line",

        data:{

            labels:history.map(x=>x.mes),

            datasets:[{

                label:"GPD (g/dia)",

                data:history.map(x=>x.valor),

                borderColor:"#005BAC",

                backgroundColor:"rgba(0,91,172,.10)",

                borderWidth:3,

                fill:true,

                tension:.35,

                pointRadius:5,

                pointHoverRadius:7

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                y:{

                    beginAtZero:false,

                    grid:{
                        color:"#EAECEF"
                    }

                },

                x:{

                    grid:{
                        display:false
                    }

                }

            }

        }

    });

}

function buildCAChart() {

    const ctx = document
        .getElementById("chartCA")
        .getContext("2d");

    const history = filterCAHistory();

    caChart = new Chart(ctx,{

        type:"bar",

        data:{

            labels:history.map(x=>x.mes),

            datasets:[{

                label:"Conversão Alimentar",

                data:history.map(x=>x.valor),

                backgroundColor:"#17A673",

                borderRadius:8

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                y:{

                    beginAtZero:false,

                    grid:{
                        color:"#EAECEF"
                    }

                },

                x:{

                    grid:{
                        display:false
                    }

                }

            }

        }

    });

}
