/**
 * Created by akraszewski on 21.06.2016.
 */
/**
 * Created by akraszewski on 21.06.2016.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');

    app.controller('WSTestController', function($scope, dataService) {
        $scope.data = null;
        dataService.getTreningTypesData().then(function(response) {
            $scope.data = response;
        });
    });




}());