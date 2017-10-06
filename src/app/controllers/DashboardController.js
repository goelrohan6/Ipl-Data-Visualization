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
            data: [[]],
            colors: [
                { 
                 // borderColor: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] ,
                 backgroundColor: '#BADA55'
                }
            ]
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