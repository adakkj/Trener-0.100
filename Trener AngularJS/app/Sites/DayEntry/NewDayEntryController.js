/**
 * Created by akraszewski on 2016-07-15.
 */
'use strict';

(function () {

    var app = angular.module('treningApp');
    app.controller("NewDayEntryController", function (dataService, CssService, $timeout) {
        this.message = "this message from NewDayEntryController";


        var zm = this;

        zm.NewDayEntry = {DateD: new Date()};

        zm.SaveEffectInfo = '';
        zm.SaveEffectCssClass = 'label label-success';
        zm.SaveNewDayEntry = function (NewDayEntryForm) {
            if (NewDayEntryForm.$valid) {
                dataService.postWSData('NewDayEntry', zm.NewDayEntry).then(function (response) {
                    alert(response.status);
                    if (response.status == 200) {
                        zm.SaveEffectInfo = 'Dodano nowy wpis!';
                        zm.SaveEffectCssClass = 'label label-success';

                        $timeout(function () {
                            zm.SaveEffectInfo = '';
                        }, 3000);
                    }
                    else {
                        zm.SaveEffectInfo = 'Wystapil blad';
                        zm.SaveEffectCssClass = 'label label-danger';
                        $timeout(function () {
                            zm.SaveEffectInfo = '';
                        }, 3000);
                    }

                    zm.NewDayEntry = {DateD: new Date()};
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

        dataService.getWSData('SubCategory').then(function (response) {
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

        // Ladowanie danych


        zm.GetCategoryName = function (categoryID) {

            var l = zm.CategoryData.filter(function (el) {
                return el.id == categoryID;
            });

            return l[0].Name;
        };
        zm.GetSubCategoryName = function (SubcategoryID) {

            var l = zm.SubCategoryData.filter(function (el) {
                return el.id == SubcategoryID;
            });
            return l[0].Name;
        };


        //CSS


        zm.GetClassforTreningForButton = CssService.GetClassforTreningForButton;
        zm.GetClassforTreningForLabel = CssService.GetClassforTreningForLabel;


        // dyrektywa dodawnia TreningEntry


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
                this.TreningEntryArray.push(this.NewElement);
                this.NewElement = {};
            }
        };


    })

}());