/* ==========================================================
   POLINUTRI PERFORMANCE DASHBOARD
   Wave 002
   app.js
========================================================== */

const Application = {

    version: "0.2.0",

    name: "Polinutri Performance Dashboard",

    initialized: false

};

function initializeApplication() {

    if (Application.initialized) {

        return;

    }

    console.group("POLINUTRI DASHBOARD");

    console.log("Application:", Application.name);

    console.log("Version:", Application.version);

    console.log("Initializing...");

    initializeFilters();

    initializeDashboard();

    Application.initialized = true;

    console.log("Dashboard initialized successfully.");

    console.groupEnd();

}

document.addEventListener("DOMContentLoaded", () => {

    initializeApplication();

});

window.Application = Application;