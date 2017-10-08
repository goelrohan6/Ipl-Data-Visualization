(function() {

    angular
        .module('app')
        .controller('RunsController', [
            '$scope',
            'totalRuns',
            'sixesFours',
            'deliveries',
            RunsController
        ]);

    function RunsController($scope, totalRuns, sixesFours, deliveries) {
        $scope.totalRuns = totalRuns.data;
        $scope.teams = ['CSK', 'DC', 'DD', 'GL', 'KXP', 'KT', 'KKR', 'MI', 'PW', 'RR', 'RP', 'RCB'];
        $scope.team = 'CSK';
        $scope.data = deliveries.data[$scope.team];
        //Deliveries Start
        $scope.selectTeam = function(team) {
            $scope.team = team;
            console.log(deliveries.data[team]);
            $scope.data = deliveries.data[team];
            console.log($scope.data);
        }
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d) { return d.runs; },
                y: function(d) { return d.count; },
                showLabels: true,
                pie: {
                    startAngle: function(d) { return d.startAngle / 2 - Math.PI / 2 },
                    endAngle: function(d) { return d.endAngle / 2 - Math.PI / 2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 70,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        //Deliveries End
        //Horizontal Bar Graph Start
        $scope.horiLabels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', ];
        $scope.horiSeries = ['Fours', 'Sixes'];
        $scope.horiData = [
            [],
            []
        ];
        $scope.horiOptions = {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Total'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Season'
                    }
                }]
            },
            legend: {
                display: true,
                position: 'top'
            },
            elements: { line: { tension: 0 } }
        };
        // Horizontal Bar Graph End
        // Sixes and Fours start
        sixesFours.data.forEach(function(item, index) {
            $scope.horiData[0][index] = item.fours;
            $scope.horiData[1][index] = item.sixes;
        });
    }

})();