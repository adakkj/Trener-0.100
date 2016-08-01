/**
 * Created by akraszewski on 2016-07-28.
 */
'use strict';

(function () {

    angular.module('TrenerDB2').component('treningEntryAddingNewTable', {
        templateUrl: './src/components/TreningEntry/AddingNewTable/templ.html',
        controllerAs: 'model',
        controller: ['DataCommonService', 'dataService', '$timeout', controller],
        bindings: {
            treningEntryArray: '='
        }

    });


    function controller(DataCommonService, dataService, $timeout) {
        this.message = "this message from treningEntryAddingNewTable";

        var zm = this;


        zm.CategoryData = {};
        zm.SubcategoryData = {};
        zm.PowerValues = [1, 2, 3, 4, 5];

        // Ladowanie danych
        dataService.getWSData('Category').then(function (response) {
            zm.CategoryData = response.data;

        }, function (e) {
            console.log(e)
        });

        dataService.getWSData('Subcategory').then(function (response) {
            zm.SubcategoryData = response.data;
        }, function (e) {
            console.log(e)
        });

        // Ladowanie danych end


        zm.GetCategoryName = function (CategoryID) {
            return DataCommonService.GetNameFromIdNameList(zm.CategoryData, CategoryID);
        };
        zm.GetSubCategoryName = function (SubcategoryID) {
            return DataCommonService.GetNameFromIdNameList(zm.SubcategoryData, SubcategoryID);
        };


        zm.AddNewElement = function () {
            if (zm.NewElement && zm.NewElement.Cat && zm.NewElement.Cat.id && zm.NewElement.Subcat && zm.NewElement.Subcat.id) {
                zm.NewElement.Cat.Name = zm.GetCategoryName(zm.NewElement.Cat.id);
                zm.NewElement.Subcat.Name = zm.GetSubCategoryName(zm.NewElement.Subcat.id);

                zm.treningEntryArray.push(zm.NewElement);
                zm.NewElement = {};
            }
            else {
                zm.AddNewElementInfo = "Musisz wybrać przynajmiej kategorie i podkategorie";
                $timeout(function () {
                    zm.AddNewElementInfo = "";
                }, 3000);
            }
        };


        zm.AddNewElementInfo = "";

        zm.treningEntryArray = [];

        zm.NewElement = {
            DayEntryID: '',
            Description: '',
            Duration: '',
            Power: '',
            Cat: {
                id: '',
                Name: ''
            },
            Subcat: {
                id: '',
                Name: ''
            }
        }

    }

}());