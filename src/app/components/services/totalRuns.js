(function() {
    'use strict';

    angular.module('app')
        .service('totalRuns', [
            function() {
                var obj = {};
                obj.data = [{
                        "labelX": "2008",
                        "count": "17937"
                    },
                    {
                        "labelX": "2009",
                        "count": "16353"
                    },
                    {
                        "labelX": "2010",
                        "count": "18883"
                    },
                    {
                        "labelX": "2011",
                        "count": "21154"
                    },
                    {
                        "labelX": "2012",
                        "count": "22453"
                    },
                    {
                        "labelX": "2013",
                        "count": "22602"
                    },
                    {
                        "labelX": "2014",
                        "count": "18931"
                    },
                    {
                        "labelX": "2015",
                        "count": "18353"
                    },
                    {
                        "labelX": "2016",
                        "count": "18862"
                    }
                ];
                return obj;
            }
        ]);
})();