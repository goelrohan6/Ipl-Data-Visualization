(function() {

    angular
        .module('app')
        .controller('DashboardController', [
            '$state',
            '$scope',
            'maximumTosses',
            'teamColors',
            DashboardController
        ]);

    function DashboardController($state, $scope, maximumTosses, teamColors) {
        var vm = this;
        $scope.chartParams = {
            labels: [],
            data: [[]],
            colors: [
                { 
                 backgroundColor: []
                }
            ]
        }
        maximumTosses.winners.forEach(function(item, index) {
            $scope.chartParams.data[0][index] = item.count;
            $scope.chartParams.labels[index] = item.toss_winner;
            $scope.chartParams.colors[0].backgroundColor[index] = teamColors.colors[item.toss_winner];
        });

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
    }

})();