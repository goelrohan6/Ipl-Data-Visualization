(function() {
    'use strict';

    angular.module('app')
        .service('matchesPlayed', [
            function() {
                var obj = {};
                obj.data = [{
                        "labelX": "2008",
                        "count": "58"
                    },
                    {
                        "labelX": "2009",
                        "count": "57"
                    },
                    {
                        "labelX": "2010",
                        "count": "60"
                    },
                    {
                        "labelX": "2011",
                        "count": "73"
                    },
                    {
                        "labelX": "2012",
                        "count": "74"
                    },
                    {
                        "labelX": "2013",
                        "count": "76"
                    },
                    {
                        "labelX": "2014",
                        "count": "60"
                    },
                    {
                        "labelX": "2015",
                        "count": "59"
                    },
                    {
                        "labelX": "2016",
                        "count": "60"
                    }
                ];
                return obj;
            }
        ]);
})();