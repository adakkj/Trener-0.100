'use strict';

(function () {
    var app = angular.module('treningApp', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/TreningTypes',
                {
                    templateUrl: 'templates/TreningTypes.html',
                    controller: 'TreningTypesController',
                    controllerAs:'TreningTypesCtrl'

                });
            $routeProvider.when('/Index',
                {
                    templateUrl: 'templates/MainList.html',
                    controller: 'MainListController',
                    controllerAs:'MainListCtrl'

                });
            $routeProvider.when('/Index2',
                {
                    templateUrl: 'Sites/DayEntry/DayEntryMainView.html',
                    controller: 'DayEntryMainViewController',
                    controllerAs:'DayEntryMainViewCtrl'

                });
            $routeProvider.when('/WS',
                {
                    templateUrl: 'templates/TestWS.html',
                    controller: 'WSTestController',
                });
            $routeProvider.otherwise(
                {
                    redirectTo:'/Index'
                });

            //$locationProvider.html5Mode(true);
        });
}());