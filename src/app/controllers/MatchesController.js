(function() {

    angular
        .module('app')
        .controller('MatchesController', [
            '$scope',
            'maximumTosses',
            'tossDecisions',
            'matchesPlayed',
            'favGrounds',
            'playerOfMatch',
            MatchesController
        ]);

    function MatchesController($scope, maximumTosses, tossDecisions, matchesPlayed, favGrounds, playerOfMatch) {
        var vm = this;
        //Directive bar graph
        $scope.tosses = maximumTosses.data;
        $scope.matchesPlayed = matchesPlayed.data;
        $scope.favGrounds = favGrounds.data;
        $scope.playerOfMatch = playerOfMatch.data;
        
        //HORIZONTAL BAR GRAPH
        $scope.labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', ];
        $scope.series = ['Batting', 'Bowling'];

        $scope.data = [
            [],
            []
        ];
        var i = 0;
        tossDecisions.data.forEach(function(item, index) {
            if (index % 2 == 0) {
                $scope.data[0][i] = item.count;
            }else{
                $scope.data[1][i] = item.count;
                i++;
            }
        });
    }

})();