'use strict';

angular.module('iplApp', ['ngTouch', 'ngAnimate',
 'ui.router', 'ui.bootstrap', 'chart.js', 'app'])

  .config(function ($stateProvider, $urlRouterProvider, ChartJsProvider) {
    //ChartJs configs
    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    //Router configs
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        controller: 'DashboardController',
        data: {
          title: 'Dashboard'
        }
      })
    $urlRouterProvider.otherwise('/dashboard');
  });
