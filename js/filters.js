/* ==========================================================
   POLINUTRI PERFORMANCE DASHBOARD
   Wave 002
   filters.js
========================================================== */

const Filters = {

    fase: "Creche",

    periodo: "Últimos 30 dias"

};

function initializeFilters() {

    const fase = document.getElementById("fase");

    const periodo = document.getElementById("periodo");

    if (fase) {

        fase.value = Filters.fase;

        fase.addEventListener("change", (event) => {

            Filters.fase = event.target.value;

            refreshDashboard();

        });

    }

    if (periodo) {

        periodo.value = Filters.periodo;

        periodo.addEventListener("change", (event) => {

            Filters.periodo = event.target.value;

            refreshDashboard();

        });

    }

}

function getCurrentFilters() {

    return {

        fase: Filters.fase,

        periodo: Filters.periodo

    };

}

function filterIndicators() {

    return dashboardData.indicadores;

}

function filterGranjas() {

    return dashboardData.granjas;

}

function filterGPDHistory() {

    return dashboardData.evolucaoGPD;

}

function filterCAHistory() {

    return dashboardData.evolucaoCA;

}

function filterBenchmark() {

    return dashboardData.benchmark;

}

function refreshDashboard() {

    if (typeof loadIndicators === "function") {

        loadIndicators();

    }

    if (typeof loadTable === "function") {

        loadTable();

    }

    if (typeof buildCharts === "function") {

        buildCharts();

    }

}
