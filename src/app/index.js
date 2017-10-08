'use strict';

angular.module('iplApp', ['ngTouch', 'ngAnimate',
        'ui.router', 'ui.bootstrap', 'chart.js', 'nvd3', 'app'
    ])

    .config(function($stateProvider, $urlRouterProvider, ChartJsProvider) {
        //ChartJs configs
        ChartJsProvider.setOptions({ colors: ['#803690', '#00ADF9', '#DCDCDC', '#FDB45C', '#949FB1', '#4D5360'] });
        Chart.defaults.global.colors = ['#BADA55', '#3f51b5', '#4fbfbd', '#ab47bc', '#3f51b5'];
        Chart.defaults.polarArea.animation.animateScale = true;
        //Router configs
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('home.teams', {
                url: '/teams',
                templateUrl: 'app/views/teams.html',
                data: {
                    title: 'Dashboard'
                }
            })
            .state('home.matches', {
                url: '/matches',
                templateUrl: 'app/views/matches.html',
                controller: 'MatchesController',
                data: {
                    title: 'Dashboard'
                }
            })
            .state('home.runs', {
                url: '/runs',
                templateUrl: 'app/views/runs.html',
                controller: 'RunsController',
                data: {
                    title: 'Dashboard'
                }
            })


        $urlRouterProvider.otherwise('/teams');
    });