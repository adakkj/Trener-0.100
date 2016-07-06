/**
 * Created by akraszewski on 20.06.2016.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("MainController", function ($scope) {
        this.message = "this message from MainController";
        $scope.message = "scope message";

        
 
    })

}())