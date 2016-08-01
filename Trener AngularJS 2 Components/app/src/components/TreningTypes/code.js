/**
 * Created by akraszewski on 2016-08-01.
 */
(function () {

    angular.module('TrenerDB2').component('treningTypes', {
        templateUrl: './src/components/TreningTypes/templ.html',
        controllerAs: 'model',
        controller: ['dataService','CssService',controller]
    });


    function controller(dataService,CssService) {
        this.message = "this message from TreningTypesController";

        var model = this;

        model.GetClassforTreningForButton = CssService.GetClassforTreningForButton;
        model.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;


        model.CategoryData = {};
        model.SubcategoryData = {};

        // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            model.CategoryData = response.data;

        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('Subcategory').then(function (response) {
            model.SubcategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end


        model.GetCategoryName = function (CategoryID) {
            return DataCommonService.GetNameFromIdNameList(model.CategoryData, CategoryID);
        };
        model.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(model.SubcategoryData, SubcategoryID);
        };



    }

}());