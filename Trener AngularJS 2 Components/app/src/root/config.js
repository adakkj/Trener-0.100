/**
 * Created by rpiekarski on 17.06.2016.
 */
'use strict';
!function () {
    angular.module('TrenerDB2').config(cfgFn);
    cfgFn.$inject = ['$stateProvider', '$urlRouterProvider'];
    function cfgFn($stateProvider, $urlRouterProvider) {


        $stateProvider.state('prosty', {
            url: '/prosty',
            templateUrl: '../../src/components/Prosty/templ.html'
        }).state('prosty2', {
            url: '/prosty2',
            template: '<prosty2></prosty2>'
        }).state('dayEntryMainView', {
            url: '/dayEntryMainView',
            template: '<day-Entry-Main-View></day-Entry-Main-View>'
        }).state('dayEntryNew', {
            url: '/dayEntryNew',
            template: '<day-Entry-New></day-Entry-New>'
        }).state('treningEntryAddingNewTable', {
            url: '/treningEntryAddingNewTable',
            template: '<trening-Entry-Adding-New-Table></trening-Entry-Adding-New-Table>'
        });
        //     .state('signup', {
        //     url: '/signup',
        //     template: '<signup-view layout="column" layout-fill="layout-fill" flex="100"></signup-view>'
        // }).state('main', {
        //     url: '/main',
        //     template:'<main-view layout="column" layout-fill="layout-fill" flex="100"></main-view>'
        // });

        $urlRouterProvider.otherwise('/prosty');
    }
}();// jshint ignore:line