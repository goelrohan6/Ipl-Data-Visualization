(function() {
    'use strict';

    angular.module('app')
        .service('maximumTosses', [
            function() {
                var obj = {};
                obj.winners = [{
                    "data": [
                        {
                            "toss_winner": "Mumbai Indians",
                            "count": "74"
                        },
                        {
                            "toss_winner": "Kolkata Knight Riders",
                            "count": "69"
                        },
                    	{
                            "toss_winner": "Chennai Super Kings",
                            "count": "66"
                        },
                        {
                            "toss_winner": "Kings XI Punjab",
                            "count": "64"
                        },
                        {
                            "toss_winner": "Delhi Daredevils",
                            "count": "64"
                        },
                        {
                            "toss_winner": "Rajasthan Royals",
                            "count": "63"
                        },
                        {
                            "toss_winner": "Royal Challengers Bangalore",
                            "count": "61"
                        },
                        {
                            "toss_winner": "Deccan Chargers",
                            "count": "43"
                        },
                        {
                            "toss_winner": "Sunrisers Hyderabad",
                            "count": "30"
                        },
                        {
                            "toss_winner": "Pune Warriors",
                            "count": "20"
                        },
                        {
                            "toss_winner": "Gujarat Lions",
                            "count": "8"
                        },
                        {
                            "toss_winner": "Kochi Tuskers Kerala",
                            "count": "8"
                        },
                        {
                            "toss_winner": "Rising Pune Supergiants",
                            "count": "7"
                        }
                    ]
                }];
                return obj;
            }
        ]);
})();