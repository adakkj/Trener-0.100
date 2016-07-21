/**
 * Created by akraszewski on 2016-07-15.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("TreningEntryDetailsController", function (dataService, CssService, $routeParams) {
        var treningID = $routeParams.TreningEntryID;
        this.message = "this message from TreningEntryDetailsController: " + treningID;


        var zm = this;

        zm.TreningEntryData = {};
        zm.CategoryData = [];
        zm.SubCategoryData = []


        // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            zm.CategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('SubCategory').then(function (response) {
            zm.SubCategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('GetTreningEntryByID/' + treningID).then(function (response) {
            zm.TreningEntryData = response.data[0]; // pierwszy element
        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych


        zm.GetCategoryName = function (categoryID) {
            if (categoryID) {
                var l = zm.CategoryData.filter(function (el) {
                    return el.id == categoryID;
                });

                if (l.length==0)
                {
                    console.log('Zalogowano categoryID: '+categoryID);
                }
                else {
                    return l[0].Name;
                }
            }
        };
        zm.GetSubCategoryName = function (SubcategoryID) {
            if (SubcategoryID) {
                var l = zm.SubCategoryData.filter(function (el) {
                    return el.id == SubcategoryID;
                });

                if (l.length==0)
                {
                    console.log('Zalogowano SubcategoryID: '+SubcategoryID);
                }
                else {
                    return l[0].Name;
                }
            }
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