(function() {
    'use strict';

    angular.module('app').
    directive('seasonRuns', function() {
        return {
            restrict: "E",
            replace: true,
            // scope: {},
            template: '<nvd3 options="seasonRunsOptions" data="seasonRunsData"></nvd3>',

            controller: function($scope, runsAcrosSeason) {
                $scope.seasonRunsData = runsAcrosSeason.data;
                $scope.seasonRunsOptions = {
                    chart: {
                        type: 'stackedAreaChart',
                        height: 450,
                        margin: {
                            top: 0,
                            right: 20,
                            bottom: 30,
                            left: 40
                        },
                        x: function(d) { return d[0]; },
                        y: function(d) { return d[1]; },
                        useVoronoi: false,
                        showLegend: true,
                        legendPosition: "right",
                        clipEdge: true,
                        duration: 100,
                        useInteractiveGuideline: true,
                        xAxis: {
                            showMaxMin: false,
                            tickFormat: function(d) {
                                return d;
                            }
                        },
                        yAxis: {
                            tickFormat: function(d) {
                                return d;
                            }
                        },
                        zoom: {
                            enabled: false,
                            scaleExtent: [1, 10],
                            useFixedDomain: false,
                            useNiceScale: false,
                            horizontalOff: false,
                            verticalOff: true,
                            unzoomEventType: 'dblclick.zoom'
                        }
                    }
                };
            }
        };
    });

})();