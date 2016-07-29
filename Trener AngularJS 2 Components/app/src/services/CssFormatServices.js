/**
 * Created by akraszewski on 2016-07-15.
 */


(function () {
    var app = angular.module('TrenerDB2');

    app.service('CssService', function() {

        this.GetClassforTreningForButton = function (treningType) {
            if(treningType) {
                switch (treningType.toLowerCase()) {
                    case 'wspinaczka':
                        return 'btn btn-info';

                    case 'bieganie':
                        return 'btn btn-danger';

                    case 'silownia':
                        return 'btn btn-warning';
                }
            }
        };

        this.GetClassforTreningForLabel = function (treningType) {
            if(treningType) {
                switch (treningType.toLowerCase()) {
                    case 'wspinaczka':
                        return 'label label-info';

                    case 'bieganie':
                        return 'label label-danger';

                    case 'silownia':
                        return 'label label-warning';
                }
            }
        };

    });



}())

