(function() {
    'use strict';

    angular.module('app')
        .service('maximumTosses', [
            function() {
                var obj = {};
                obj.data = [{
                        "labelX": "MI",
                        "count": "74"
                    },
                    {
                        "labelX": "KKR",
                        "count": "69"
                    },
                    {
                        "labelX": "CSK",
                        "count": "66"
                    },
                    {
                        "labelX": "KXP",
                        "count": "64"
                    },
                    {
                        "labelX": "DD",
                        "count": "64"
                    },
                    {
                        "labelX": "RR",
                        "count": "63"
                    },
                    {
                        "labelX": "RCB",
                        "count": "61"
                    },
                    {
                        "labelX": "DC",
                        "count": "43"
                    },
                    {
                        "labelX": "SH",
                        "count": "30"
                    },
                    {
                        "labelX": "PW",
                        "count": "20"
                    },
                    {
                        "labelX": "GL",
                        "count": "8"
                    },
                    {
                        "labelX": "KT",
                        "count": "8"
                    },
                    {
                        "labelX": "RP",
                        "count": "7"
                    }
                ];
                return obj;
            }
        ]);
})();