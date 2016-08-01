/**
 * Created by akraszewski on 2016-07-26.
 */
angular.module('treningApp').controller('TimepickerCtrl', function ($scope, $log) { // nazwa kontrolera musi być taka jak tu!!!
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 20;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.mytime = d;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
});