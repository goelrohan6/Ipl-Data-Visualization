(function() {

    angular
        .module('app')
        .controller('RunsController', [
            '$scope',
            'totalRuns',
            'sixesFours',
            RunsController
        ]);

    function RunsController($scope, totalRuns, sixesFours) {
        $scope.totalRuns = totalRuns.data;
        console.log(sixesFours);
        //HORIZONTAL BAR GRAPH
        $scope.labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', ];
        $scope.series = ['Fours', 'Sixes'];
        $scope.data = [
            [],
            []
        ];
        sixesFours.data.forEach(function(item, index) {
            $scope.data[0][index] = item.fours;
            $scope.data[1][index] = item.sixes;
        });
    }

})();