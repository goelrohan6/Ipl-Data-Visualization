(function() {
    'use strict';

    angular.module('app')
        .service('maximumTosses', [
            function() {
                var obj = {};
                obj.winners = [{
                    "data": [
                        {
                            "toss_winner": "MI",
                            "count": "74"
                        },
                        {
                            "toss_winner": "KKR",
                            "count": "69"
                        },
                    	{
                            "toss_winner": "CSK",
                            "count": "66"
                        },
                        {
                            "toss_winner": "KXP",
                            "count": "64"
                        },
                        {
                            "toss_winner": "DD",
                            "count": "64"
                        },
                        {
                            "toss_winner": "RR",
                            "count": "63"
                        },
                        {
                            "toss_winner": "RCB",
                            "count": "61"
                        },
                        {
                            "toss_winner": "DC",
                            "count": "43"
                        },
                        {
                            "toss_winner": "SH",
                            "count": "30"
                        },
                        {
                            "toss_winner": "PW",
                            "count": "20"
                        },
                        {
                            "toss_winner": "GL",
                            "count": "8"
                        },
                        {
                            "toss_winner": "KT",
                            "count": "8"
                        },
                        {
                            "toss_winner": "RP",
                            "count": "7"
                        }
                    ]
                }];
                return obj;
            }
        ]);
})();