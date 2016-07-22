/**
 * Created by akraszewski on 2016-07-15.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("NewDayEntryController", function (dataService, CssService, $timeout,DataCommonService) {
        this.message = "this message from NewDayEntryController";


        var zm = this;

        zm.NewDayEntry = {DateD: new Date()};

        zm.SaveEffectInfo = '';
        zm.SaveEffectCssClass = 'label label-success';
        zm.SaveNewDayEntry = function (NewDayEntryForm) {
            if (NewDayEntryForm.$valid) {
                dataService.postWSData('NewDayEntryWithTreningData', {NewDayEntry:zm.NewDayEntry,TreningEntryArray:zm.NewTreningEntiries.TreningEntryArray}).then(function (response) {
                    if (response.data.status == 'Successful') {
                        zm.SaveEffectInfo = 'Dodano nowy wpis!';
                        zm.SaveEffectCssClass = 'label label-success';

                        $timeout(function () {
                            zm.SaveEffectInfo = '';
                        }, 3000);

                        zm.NewTreningEntiries.TreningEntryArray={};
                        zm.NewDayEntry = {DateD: new Date()};
                    }
                    else {
                        zm.SaveEffectInfo = 'Wystapil blad';
                        zm.SaveEffectCssClass = 'label label-danger';
                        $timeout(function () {
                            zm.SaveEffectInfo = '';
                        }, 3000);
                    }
                })
            }
            else {
                alert('Niepoprawne dane w formlarzu');
            }
        };


        zm.DayEntryMainViewData = {};
        zm.TreningEntryMainViewData = {};
        zm.CategoryData = {};
        zm.SubcategoryData = {};

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
                return DataCommonService.GetNameFromIdNameList(zm.SubcategoryData,SubcategoryID);
        };


        //CSS


        zm.GetClassforTreningForButton = CssService.GetClassforTreningForButton;
        zm.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;


        // dyrektywa dodawnia TreningEntry

        zm.AddNewElementInfo="";

        zm.NewTreningEntiries = {
            Test: 'xyz',
            TreningEntryArray: [],
            NewElement: {
                DayEntryID: '',
                Description: '',
                Duration: '',
                Power: '',
                Cat:{
                    id:'',
                    Name:''
                },
                Subcat:{id:'',
                    Name:''}
            },

            AddNewElement: function () {
                if(this.NewElement && this.NewElement.Cat && this.NewElement.Cat.id && this.NewElement.Subcat && this.NewElement.Subcat.id) {
                    this.NewElement.Cat.Name = zm.GetCategoryName(this.NewElement.Cat.id);
                    this.NewElement.Subcat.Name = zm.GetSubCategoryName(this.NewElement.Subcat.id);

                    this.TreningEntryArray.push(this.NewElement);
                    this.NewElement = {};
                }
                else
                {
                    zm.AddNewElementInfo="Musisz wybrać przynajmiej kategorie i podkategorie";
                    $timeout(function () {
                        zm.AddNewElementInfo = "";
                    }, 3000);
                }
            }
        };


    })

}());