(function() {

    angular
        .module('app')
        .controller('MatchesController', [
            '$scope',
            'maximumTosses',
            'tossDecisions',
            'matchesPlayed',
            'favGrounds',
            'playerOfMatch',
            MatchesController
        ]);

    function MatchesController($scope, maximumTosses, tossDecisions, matchesPlayed, favGrounds, playerOfMatch) {
        var vm = this;
        //Directive bar graph
        $scope.tosses = maximumTosses.data;
        $scope.matchesPlayed = matchesPlayed.data;
        $scope.favGrounds = favGrounds.data;

        // Polar Graph
        $scope.polarLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.polarData = [300, 500, 100, 40, 120];

        playerOfMatch.data.forEach( function(element, index) {
            $scope.polarData[index] = parseInt(element.count);
            $scope.polarLabels[index] = element.labelX;
        });
        $scope.polarOptions = {
            legend: {
                display: true,
                position: 'right'
            }
        }
        $scope.polarColors = ['#ef5f83', '#53c0c0', '#fbcc56', '#fbcc56','#36a1eb','#97bacd', '#bada55'];
        //Toss decisions
        $scope.labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', ];
        $scope.series = ['Batting', 'Bowling'];
        $scope.options = {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Season'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Total'
                    }
                }]
            },
            legend: {
                display: true,
                position: 'right'
            }
        }
        $scope.colors = ['#97bacd', '#bada55'];
        $scope.data = [
            [],
            []
        ];
        var i = 0;
        tossDecisions.data.forEach(function(item, index) {
            if (index % 2 == 0) {
                $scope.data[0][i] = item.count;
            } else {
                $scope.data[1][i] = item.count;
                i++;
            }
        });
    }

})();