/**
 * Created by akraszewski on 2016-07-26.
 */
"use strict";
(function () {
    angular.module('TrenerDB2')
        .service('sharedProperties', function () {
            return {
                currentSelection: null
            };

        });
}());

