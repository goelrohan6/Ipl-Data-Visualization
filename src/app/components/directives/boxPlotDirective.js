(function() {
    'use strict';

    angular.module('app').
    directive('boxPlot', function() {
        return {
            restrict: "E",
            replace: true,
            // scope: {},
            template: '<nvd3 options="boxPlotOptions" data="boxPlotData" class="with-3d-shadow with-transitions"></nvd3>',

            controller: function($scope, boxPlotTeams) {
                $scope.boxPlotData = boxPlotTeams.data;
                $scope.boxPlotOptions = {
                    chart: {
                        type: 'boxPlotChart',
                        height: 450,
                        margin: {
                            top: 20,
                            right: 0,
                            bottom: 60,
                            left: 40
                        },
                        useInteractiveGuideline: true,
                        xAxis: {
                            axisLabel: 'Teams'
                        },
                        yAxis: {
                            axisLabel: 'Runs'
                        },
                        color: ['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
                        x: function(d) { return d.label; },
                        // y: function(d){return d.values.Q3;},
                        maxBoxWidth: 75,
                        yDomain: [0, 300]
                    }
                };
            }
        };
    });

})();