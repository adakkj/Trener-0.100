'use strict';

(function () {


    var app = angular.module('treningApp');

    app.directive("myNavBar", function () {
            return {
                restrict: 'E',
                templateUrl: '/templates/AKNavBar.html',
            };
        }
    );

    app.directive("votingThing", function () {
            return {
                restrict: 'E',
                templateUrl: '/templates/VotingThing.html',
                replece: true,
                scope: {
                    uptreningpower: "&",
                    downtreningpower: "&",
                    count: '=count'
                }
            };
        }
    );

    app.directive("betterInput", function () {
            return {
                restrict: 'E',
                template: "<button class='btn btn-danger'> ",
                replace:true,
                link: function (scope, element, attrs, controller) {
                    attrs.$observe('laladata', function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            //attrs.$set('ng-value', Date.now());

                            element.html(Date.now());
                        }
                    })
                }
            };
        }
    );

    app.directive('dateKeys', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs, controller) {
                element.on('keydown', function (event) {
                    if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                        return true;
                    }
                    return false;
                })
            }
        }

        function isNumericKeyCode(keyCode) {
            return (event.keyCode >= 48 && event.keyCode <= 57)
                || (event.keyCode >= 96 && event.keyCode <= 105);
        }

        function isForwardSlashKeyCode(keycode) {
            return event.keyCode === 191;
        }

        function isNavigationKeycode(keyCode) {
            switch (keyCode) {
                case 8: //backspace
                case 35: //end
                case 36: //home
                case 37: //left
                case 38: //up
                case 39: //right
                case 40: //down
                case 45: //ins
                case 46: //del
                    return true;
                default:
                    return false;
            }
        }
    });


}());