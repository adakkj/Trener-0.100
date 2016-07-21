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
            if(treningType) {
                switch (treningType.toLowerCase()) {
                    case 'wspinaczka':
                        return 'btn btn-info';

                    case 'bieganie':
                        return 'btn btn-danger';

                    case 'silownia':
                        return 'btn btn-warning';
                }
            }
        };

        this.GetClassforTreningForLabel = function (treningType) {
            if(treningType) {
                switch (treningType.toLowerCase()) {
                    case 'wspinaczka':
                        return 'label label-info';

                    case 'bieganie':
                        return 'label label-danger';

                    case 'silownia':
                        return 'label label-warning';
                }
            }
        };


        var zm = this;
        zm.TreningTypesData = {};

        dataService.getWSData('CatAndSubCatTreningTypesView').then(function (response) {
            zm.TreningTypesData = response.data;

        },function(e){console.log(e)});

    })

}());