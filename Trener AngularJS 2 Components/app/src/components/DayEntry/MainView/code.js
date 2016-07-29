/**
 * Created by akraszewski on 2016-07-28.
 */
'use strict';

(function () {

    angular.module('TrenerDB2').component('dayEntryMainView', {
        templateUrl: './src/components/DayEntry/MainView/templ.html',
        controllerAs:'model',
        controller: ['dataService', 'CssService', 'DataCommonService',controller]
    });

    function controller(dataService, CssService, DataCommonService) {
        this.message = "this message from DayEntryMainViewController";


        var model = this;
        model.DayEntryMainViewData = {};
        model.TreningEntryMainViewData = {};
        model.CategoryData = {};
        model.SubCategoryData = {};


        // // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            model.CategoryData = response.data;

        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('SubCategory').then(function (response) {
            model.SubCategoryData = response.data;


        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('TreningEntryMainView').then(function (response) {
            model.TreningEntryMainViewData = response.data;

        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('DayEntryMainView').then(function (response) {
            model.DayEntryMainViewData = response.data;

        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end


        model.GetCategoryName = function (CategoryID) {
            return DataCommonService.GetNameFromIdNameList(model.CategoryData, CategoryID);
        };
        model.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(model.SubCategoryData, SubcategoryID);
        };


        //CSS

        model.GetClassforTreningForButton = CssService.GetClassforTreningForButton;
        model.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;

    }



}());