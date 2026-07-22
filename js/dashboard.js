/* ==========================================================
   POLINUTRI PERFORMANCE DASHBOARD
   Wave 002
   dashboard.js
========================================================== */

function loadIndicators() {

    const indicadores = filterIndicators();

    document.getElementById("gpd").textContent =
        indicadores.gpd.toLocaleString("pt-BR") + " g";

    document.getElementById("ca").textContent =
        indicadores.ca.toFixed(2);

    document.getElementById("mort").textContent =
        indicadores.mortalidade.toFixed(2) + "%";

    document.getElementById("peso").textContent =
        indicadores.pesoFinal.toFixed(1) + " kg";

}

function loadTable() {

    const tbody = document.getElementById("tableData");

    tbody.innerHTML = "";

    const granjas = filterGranjas();

    granjas.forEach((granja) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${granja.nome}</td>

            <td>${granja.gpd}</td>

            <td>${granja.ca.toFixed(2)}</td>

            <td>${granja.mortalidade.toFixed(2)}%</td>

            <td>${granja.peso.toFixed(1)} kg</td>

        `;

        tbody.appendChild(tr);

    });

}

function loadBenchmark() {

    const benchmark = filterBenchmark();

    console.table(benchmark);

}

function updateDashboard() {

    loadIndicators();

    loadTable();

    buildCharts();

    loadBenchmark();

}

function refreshDashboard() {

    updateDashboard();

}

function initializeDashboard() {

    updateDashboard();

}

window.updateDashboard = updateDashboard;

window.initializeDashboard = initializeDashboard;

window.refreshDashboard = refreshDashboard;