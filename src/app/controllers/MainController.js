(function() {

    angular
        .module('app')
        .controller('MainController', [
            '$state',
            '$scope',
            MainController
        ]);

    function MainController($state, $scope) {
        var vm = this;
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        $scope.isCollapsedHorizontal = false;
    }

})();