(function() {
    'use strict';

    angular.module('app').
    directive('sunBurst', function() {
        return {
            restrict: "E",
            replace: true,
            // scope: {},
            template: '<nvd3 options="sunBurstOptions" data="subBurstData" class="with-3d-shadow with-transitions"></nvd3>',

            controller: function($scope, sunburst) {
                $scope.subBurstData = sunburst.data;
                $scope.sunBurstOptions = {
                        chart: {
                            type: 'sunburstChart',
                            height: 450,
                            color: d3.scale.category20c(),
                            duration: 250
                        }
                    };

            }
        };
    });

})();