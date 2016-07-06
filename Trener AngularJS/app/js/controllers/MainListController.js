/**
 * Created by akraszewski on 21.06.2016.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("MainListController", function ($scope,TreningData) {
        this.message = "this message from MainListController";
        this.sortorder = 'Date';
        this.downTreningPower= function (entry){
            if (entry.Power>0 && entry.Power<=5) {
                entry.Power--;
            }
        };
        this.upTreningPower= function (entry){
            if (entry.Power>=0 && entry.Power<5) {
                entry.Power++;
            }
        };

        this.GetClassforTrening = function (treningType) {
            switch (treningType) {
                case 'wspinaczka':
                    return 'btn btn-info';

                case 'bieganie':
                    return 'btn btn-danger';

                case 'siłownia':
                    return 'btn btn-warning';
            }
        };


        this.TreningList = TreningData.GetTreningEntries();
    })

}())