/**
 * Created by akraszewski on 21.06.2016.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("TreningTypesController", function ( dataService) {
        this.message = "this message from TreningTypesController";
        this.sortorder = 'Date';

        this.GetClassforTreningForButton = function (treningType) {
            switch (treningType) {
                case 'wspinaczka':
                    return 'btn btn-info';

                case 'bieganie':
                    return 'btn btn-danger';

                case 'siłownia':
                    return 'btn btn-warning';
            }
        };

        this.GetClassforTreningForLabel = function (treningType) {
            switch (treningType) {
                case 'wspinaczka':
                    return 'label label-info';

                case 'bieganie':
                    return 'label label-danger';

                case 'siłownia':
                    return 'label label-warning';
            }
        };


        var zm = this;
        zm.TreningTypes2 = {};
        this.TreningTypes = dataService.getTreningTypesData().then(function (response) {
            zm.TreningTypes2 = response.data.list;

        },function(e){console.log(e)});


    })

}())