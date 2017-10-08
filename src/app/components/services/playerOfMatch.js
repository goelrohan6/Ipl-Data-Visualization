(function() {
    'use strict';

    angular.module('app')
        .service('playerOfMatch', [
            function() {
                var obj = {};
                obj.data = [{
                        "labelX": "CH Gayle",
                        "count": "17"
                    },
                    {
                        "labelX": "YK Pathan",
                        "count": "16"
                    },
                    {
                        "labelX": "AB de Villiers",
                        "count": "15"
                    },
                    {
                        "labelX": "DA Warner",
                        "count": "14"
                    },
                    {
                        "labelX": "RG Sharma",
                        "count": "13"
                    },
                    {
                        "labelX": "SK Raina",
                        "count": "13"
                    },
                    {
                        "labelX": "G Gambhir",
                        "count": "12"
                    },
                    {
                        "labelX": "MEK Hussey",
                        "count": "12"
                    },
                    {
                        "labelX": "MS Dhoni",
                        "count": "12"
                    },
                    {
                        "labelX": "AM Rahane",
                        "count": "12"
                    }
                ];
                return obj;
            }
        ]);
})();