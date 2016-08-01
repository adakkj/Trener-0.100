/**
 * Created by akraszewski on 2016-08-01.
 */
'use strict';

(function () {


    var app = angular.module('TrenerDB2');

    app.directive("myNavBar", function () {
            return {
                restrict: 'E',
                templateUrl: '/src/Directives/AKNavBar.html'
            };
        }
    );
}());