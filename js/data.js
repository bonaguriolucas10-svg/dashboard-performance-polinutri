/* ==========================================================
   POLINUTRI PERFORMANCE DASHBOARD
   Wave 002
   data.js
========================================================== */

const dashboardData = {

    indicadores:{

        gpd:845,

        ca:2.41,

        mortalidade:2.15,

        pesoFinal:123.6

    },

    evolucaoGPD:[

        {mes:"Jan",valor:790},
        {mes:"Fev",valor:801},
        {mes:"Mar",valor:815},
        {mes:"Abr",valor:828},
        {mes:"Mai",valor:839},
        {mes:"Jun",valor:845}

    ],

    evolucaoCA:[

        {mes:"Jan",valor:2.58},
        {mes:"Fev",valor:2.54},
        {mes:"Mar",valor:2.50},
        {mes:"Abr",valor:2.47},
        {mes:"Mai",valor:2.44},
        {mes:"Jun",valor:2.41}

    ],

    granjas:[

        {
            nome:"Granja Alpha",
            gpd:852,
            ca:2.38,
            mortalidade:1.80,
            peso:124.8
        },

        {
            nome:"Granja Beta",
            gpd:841,
            ca:2.43,
            mortalidade:2.05,
            peso:122.9
        },

        {
            nome:"Granja Gama",
            gpd:833,
            ca:2.48,
            mortalidade:2.61,
            peso:121.5
        },

        {
            nome:"Granja Delta",
            gpd:858,
            ca:2.37,
            mortalidade:1.72,
            peso:125.4
        },

        {
            nome:"Granja Épsilon",
            gpd:839,
            ca:2.46,
            mortalidade:2.11,
            peso:122.3
        }

    ],

    benchmark:[

        {
            indicador:"GPD",
            polinutri:845,
            mercado:812
        },

        {
            indicador:"CA",
            polinutri:2.41,
            mercado:2.56
        },

        {
            indicador:"Mortalidade",
            polinutri:2.15,
            mercado:2.73
        },

        {
            indicador:"Peso Final",
            polinutri:123.6,
            mercado:119.4
        }

    ]

};
