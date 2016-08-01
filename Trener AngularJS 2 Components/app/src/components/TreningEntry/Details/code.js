/**
 * Created by akraszewski on 2016-07-28.
 */
'use strict';

(function () {

    angular.module('TrenerDB2').component('treningEntryDetails', {
        templateUrl: './src/components/TreningEntry/Details/templ.html',
        controllerAs: 'model',
        controller: ['DataCommonService', 'dataService', '$stateParams','CssService', controller]

    });


    function controller(DataCommonService, dataService,$stateParams,CssService) {
        this.message = "this message from treningEntryAddingNewTable";

        var model = this;

        model.TreningEntryData = {};


        model.CategoryData = [];
        model.SubcategoryData = [];


        // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            model.CategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('SubCategory').then(function (response) {
            model.SubcategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('GetTreningEntryByID/' + $stateParams.id).then(function (response) {
            model.TreningEntryData = response.data[0]; // pierwszy element
        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end


        model.GetCategoryName = function(CategoryID){
            return DataCommonService.GetNameFromIdNameList(model.CategoryData,CategoryID);
        };
        model.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(model.SubcategoryData,SubcategoryID);
        };

        //CSS

        model.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;


        model.downTreningPower = function (entry) {
            if (entry.Power > 0 && entry.Power <= 5) {
                entry.Power--;
            }
        };
        model.upTreningPower = function (entry) {
            if (entry.Power >= 0 && entry.Power < 5) {
                entry.Power++;
            }
        };

    }


}());