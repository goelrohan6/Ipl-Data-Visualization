(function() {
    'use strict';

    angular.module('app')
        .service('favGrounds', [
            function() {
                var obj = {};
                obj.data = [{
                        "labelX": "M Chinnaswamy",
                        "count": "58"
                    },
                    {
                        "labelX": "Eden Gardens",
                        "count": "54"
                    },
                    {
                        "labelX": "Feroz Shah Kotla",
                        "count": "53"
                    },
                    {
                        "labelX": "Wankhede",
                        "count": "49"
                    },
                    {
                        "labelX": "MA Chidambaram",
                        "count": "48"
                    },
                    {
                        "labelX": "Rajiv Gandhi",
                        "count": "41"
                    },
                    {
                        "labelX": "Punjab Cricket",
                        "count": "35"
                    },
                    {
                        "labelX": "Sawai Mansingh",
                        "count": "33"
                    }
                ];
                return obj;
            }
        ]);
})();