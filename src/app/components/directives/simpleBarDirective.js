(function() {
    'use strict';

    angular.module('app').
    directive('simpleBar', function() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                multicolor: '=multicolor',
                arr: '=arr'
            },
            templateUrl: 'app/views/partials/simpleBarGraph.html',
            controller: function($scope, teamColors) {
                const color = [];
                $scope.chartParams = {
                    
                    labels: [],
                    data: [
                        []
                    ],
                    colors: [{ backgroundColor: [] }]
                }
                $scope.arr.forEach(function(item, index) {
                    $scope.chartParams.data[0][index] = item.count;
                    $scope.chartParams.labels[index] = item.labelX;
                    color[index] = teamColors.colors[item.labelX];
                });
                if ($scope.multicolor) {
                    $scope.chartParams.colors[0].backgroundColor = color;
                } else {
                    var index = Math.round(Math.random() * (teamColors.randomColors.length)); //get a random index from array
                    $scope.chartParams.colors[0].backgroundColor = teamColors.randomColors[index];
                }
            }
        };
    });

})();