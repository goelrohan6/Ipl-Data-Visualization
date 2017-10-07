(function() {
    'use strict';

    angular.module('app')
        .service('tossDecisions', [
            function() {
                var obj = {};
                obj.data = [{
                        "season": "2008",
                        "toss_decision": "bat",
                        "count": "26"
                    },
                    {
                        "season": "2008",
                        "toss_decision": "field",
                        "count": "32"
                    },
                    {
                        "season": "2009",
                        "toss_decision": "bat",
                        "count": "35"
                    },
                    {
                        "season": "2009",
                        "toss_decision": "field",
                        "count": "22"
                    },
                    {
                        "season": "2010",
                        "toss_decision": "bat",
                        "count": "39"
                    },
                    {
                        "season": "2010",
                        "toss_decision": "field",
                        "count": "21"
                    },
                    {
                        "season": "2011",
                        "toss_decision": "bat",
                        "count": "25"
                    },
                    {
                        "season": "2011",
                        "toss_decision": "field",
                        "count": "48"
                    },
                    {
                        "season": "2012",
                        "toss_decision": "bat",
                        "count": "37"
                    },
                    {
                        "season": "2012",
                        "toss_decision": "field",
                        "count": "37"
                    },
                    {
                        "season": "2013",
                        "toss_decision": "bat",
                        "count": "45"
                    },
                    {
                        "season": "2013",
                        "toss_decision": "field",
                        "count": "31"
                    },
                    {
                        "season": "2014",
                        "toss_decision": "bat",
                        "count": "19"
                    },
                    {
                        "season": "2014",
                        "toss_decision": "field",
                        "count": "41"
                    },
                    {
                        "season": "2015",
                        "toss_decision": "bat",
                        "count": "25"
                    },
                    {
                        "season": "2015",
                        "toss_decision": "field",
                        "count": "34"
                    },
                    {
                        "season": "2016",
                        "toss_decision": "bat",
                        "count": "11"
                    },
                    {
                        "season": "2016",
                        "toss_decision": "field",
                        "count": "49"
                    }
                ];
                return obj;
            }
        ]);
})();