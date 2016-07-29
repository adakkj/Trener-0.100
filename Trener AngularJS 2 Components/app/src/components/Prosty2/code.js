/**
 * Created by akraszewski on 2016-07-28.
 */
'use strict';

(function () {

    angular.module('TrenerDB2').component('prosty2', {
        templateUrl: './src/components/Prosty2/templ.html',
        controllerAs:'model',
        controller: [controller]
    });


    function controller() {
        this.message = "this message from Prosty";

        var zm = this;

    }

}());