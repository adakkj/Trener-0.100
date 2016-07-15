'use strict';

// eventsApp.filter('durations', function() {
//   return function(duration) {
//     switch(duration) {
//       case 1:
//         return "Half Hour";
//       case 2:
//         return "1 Hour";
//       case 3:
//         return "Half Day";
//       case 4:
//         return "Full Day";
//     }
//   }
// });


(function () {
  var app = angular.module('treningApp');
  app.filter('unique', function () {

    return function (items, filterOn) {

      if (filterOn === false) {
        return items;
      }

      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var hashCheck = {}, newItems = [];

        var extractValueToCompare = function (item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };

        angular.forEach(items, function (item) {
          var valueToCheck, isDuplicate = false;

          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }

        });
        items = newItems;
      }
      return items;
    };
  });
}());