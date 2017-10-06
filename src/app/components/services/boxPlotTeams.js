(function() {
    'use strict';

    angular.module('app')
        .service('boxPlotTeams', [
            function() {
                var obj = {};
                obj.teams = [{
                    "data": [{
                            "batting_team": "CSK",
                            "max": "246",
                            "min": "55",
                            "q1" : "141",
                            "q2" : "160",
                            "q3" : "180",
                        },
                        {
                            "batting_team": "DC",
                            "max": "214",
                            "min": "82",
                            "q1" : "137",
                            "q2" : "151",
                            "q3" : "169",
                        },
                        {
                            "batting_team": "DD",
                            "max": "231",
                            "min": "56",
                            "q1" : "132",
                            "q2" : "150",
                            "q3" : "167",
                        },
                        {
                            "batting_team": "GL",
                            "max": "196",
                            "min": "104",
                            "q1" : "131",
                            "q2" : "158",
                            "q3" : "164",
                        },
                        {
                            "batting_team": "KXP",
                            "max": "232",
                            "min": "88",
                            "q1" : "130",
                            "q2" : "157",
                            "q3" : "176",
                        },
                        {
                            "batting_team": "KT",
                            "max": "184",
                            "min": "74",
                            "q1" : "109",
                            "q2" : "135",
                            "q3" : "148",
                        },
                        {
                            "batting_team": "KKR",
                            "max": "222",
                            "min": "61",
                            "q1" : "132",
                            "q2" : "150",
                            "q3" : "165",
                        },
                        {
                            "batting_team": "MI",
                            "max": "218",
                            "min": "68",
                            "q1" : "141",
                            "q2" : "159",
                            "q3" : "174",
                        },
                        {
                            "batting_team": "PW",
                            "max": "192",
                            "min": "99",
                            "q1" : "118",
                            "q2" : "139",
                            "q3" : "156",
                        },
                        {
                            "batting_team": "RR",
                            "max": "223",
                            "min": "58",
                            "q1" : "132",
                            "q2" : "147",
                            "q3" : "170",
                        },
                        {
                            "batting_team": "RP",
                            "max": "195",
                            "min": "76",
                            "q1" : "103",
                            "q2" : "159",
                            "q3" : "166",
                        },
                        {
                            "batting_team": "Royal Challengers Bangalore",
                            "max": "263",
                            "min": "2",
                            "q1" : "135",
                            "q2" : "157",
                            "q3" : "176",
                        },
                        {
                            "batting_team": "SH",
                            "max": "208",
                            "min": "44",
                            "q1" : "132",
                            "q2" : "146",
                            "q3" : "163",
                        }
                    ]
                }]
                return obj;
            }
        ]);
})();