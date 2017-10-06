(function() {

    angular
        .module('app')
        .controller('DashboardController', [
            '$state',
            '$scope',
            'maximumTosses',
            DashboardController
        ]);

    function DashboardController($state, $scope, maximumTosses) {
        var vm = this;
        $scope.chartParams = {
            labels: [],
            series: ['Series A'],
            datasetOverride: [{ yAxisID: 'y-axis-1' }],
            data: [
                []
            ],
            // colors: [{fillColor:["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"]}],
            options: {
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }]
                }
            }
        }
        maximumTosses.winners[0].data.forEach(function(item, index) {
            $scope.chartParams.data[0][index] = item.count;
            $scope.chartParams.labels[index] = item.toss_winner;
        });

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
    }

})();