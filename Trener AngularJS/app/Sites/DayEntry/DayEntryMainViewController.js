/**
 * Created by akraszewski on 2016-07-15.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("DayEntryMainViewController", function (dataService,CssService,DataCommonService) {
        this.message = "this message from DayEntryMainViewController";


        var zm = this;
        zm.DayEntryMainViewData = {};
        zm.TreningEntryMainViewData = {};
        zm.CategoryData = {};
        zm.SubCategoryData = {};




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

        dataService.getWSData('TreningEntryMainView').then(function (response) {
            zm.TreningEntryMainViewData = response.data;

        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('DayEntryMainView').then(function (response) {
            zm.DayEntryMainViewData = response.data;

        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end


        zm.GetCategoryName = function(CategoryID){
            return DataCommonService.GetNameFromIdNameList(zm.CategoryData,CategoryID);
        };
        zm.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(zm.SubCategoryData,SubcategoryID);
        };


        //CSS

        zm.GetClassforTreningForButton =  CssService.GetClassforTreningForButton;
        zm.GetClassforTreningForLabel =  CssService.GetClassforTreningForLabel;
        


    })

}());