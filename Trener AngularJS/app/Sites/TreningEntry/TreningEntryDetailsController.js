/**
 * Created by akraszewski on 2016-07-15.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("TreningEntryDetailsController", function (dataService, CssService, $routeParams,DataCommonService) {
        var treningID = $routeParams.TreningEntryID;
        this.message = "this message from TreningEntryDetailsController: " + treningID;


        var zm = this;

        zm.TreningEntryData = {};
        zm.CategoryData = [];
        zm.SubcategoryData = [];


        // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            zm.CategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('SubCategory').then(function (response) {
            zm.SubcategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('GetTreningEntryByID/' + treningID).then(function (response) {
            zm.TreningEntryData = response.data[0]; // pierwszy element
        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end



        zm.GetCategoryName = function(CategoryID){
            return DataCommonService.GetNameFromIdNameList(zm.CategoryData,CategoryID);
        };
        zm.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(zm.SubcategoryData,SubcategoryID);
        };

        //CSS

        zm.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;


        zm.downTreningPower = function (entry) {
            if (entry.Power > 0 && entry.Power <= 5) {
                entry.Power--;
            }
        };
        zm.upTreningPower = function (entry) {
            if (entry.Power >= 0 && entry.Power < 5) {
                entry.Power++;
            }
        };


    })

}());