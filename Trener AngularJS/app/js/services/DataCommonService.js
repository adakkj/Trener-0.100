/**
 * Created by akraszewski on 2016-07-22.
 */

(function () {
    var app = angular.module('treningApp');
    app.service('DataCommonService', function () {

        this.GetNameFromIdNameList = function (list,id) {

            if (id && list && list.length>0) {
                var l = list.filter(function (el) {
                    return el.id == id;
                });

                if(l.length>0) {
                    return l[0].Name;
                }
                else {
                    console.log('W liscie brakuje nazwy dla id: '+id);
                }
            }
            else {
                console.log('Brak id lub lista jest pusta');
            }
        };
    });






}());