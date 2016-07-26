/**
 * Created by akraszewski on 2016-07-26.
 */
"use strict";
(function () {
    angular.module('treningApp')
        .service('sharedProperties', function ($rootScope) {
            return {
                currentSelection: null
            };

        });
}());

