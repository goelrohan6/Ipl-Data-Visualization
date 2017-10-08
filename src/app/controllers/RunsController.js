(function() {

    angular
        .module('app')
        .controller('RunsController', [
            '$scope',
            'totalRuns',
            RunsController
        ]);

    function RunsController($scope, totalRuns) {
        $scope.totalRuns = totalRuns.data;
    }

})();