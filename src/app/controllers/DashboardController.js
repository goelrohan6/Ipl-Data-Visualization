(function() {

    angular
        .module('app')
        .controller('DashboardController', [
            '$scope',
            'maximumTosses',
            'matchesPlayed',
            'totalRuns',
            'favGrounds',
            'playerOfMatch',
            DashboardController
        ]);

    function DashboardController($scope, maximumTosses, matchesPlayed, totalRuns, favGrounds, playerOfMatch) {
        var vm = this;
        //Directive bar graph
        $scope.tosses = maximumTosses.data;
        $scope.matchesPlayed = matchesPlayed.data;
        $scope.totalRuns = totalRuns.data;
        $scope.totalRuns = totalRuns.data;
        $scope.favGrounds = favGrounds.data;
        $scope.playerOfMatch = playerOfMatch.data;
        
    }

})();