/**
 * Created by akraszewski on 2016-07-28.
 */
'use strict';

(function () {

    angular.module('TrenerDB2').component('prosty', {
        templateUrl: './app/src/components/Prosty/templ.html',
        controllerAs:'model',
        controller: [controller]
    });


    function controller() {
        this.message = "this message from Prosty";

        var zm = this;

    }

}());