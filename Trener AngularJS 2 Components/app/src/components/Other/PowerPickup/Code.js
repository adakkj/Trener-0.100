/**
 * Created by akraszewski on 2016-08-01.
 */
(function () {

        angular.module('TrenerDB2').component('powerPickup', {
            templateUrl: './src/components/Other/PowerPickup/templ.html',
            controllerAs: 'model',
            controller: ['$scope', '$uibModal', '$log', 'sharedProperties', controller],
            bindings: {
                items: '=',
                selectedValue:'='
            }

        });


        function controller($scope, $uibModal, $log, sharedProperties) {

            var model = this;
          //  model.items = [];
            model.selectedValue;
            model.animationsEnabled = true;

            // watch the service for changes to currentUser
            $scope.$watch(function () {
                return sharedProperties.currentSelection;
            }, function (currentSelection) {
                model.selectedValue = currentSelection;
                if(   model.selectedValue>0)
                {
                    console.log(model.selectedValue);
                }
            }, true);

            model.open = function (size) {

                var modalInstance = $uibModal.open({
                    animation: model.animationsEnabled,
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'model',
                    size: size,
                    resolve: {
                        items: function () {
                            return model.items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    model.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            model.toggleAnimation = function () {
                model.animationsEnabled = !model.animationsEnabled;
            };
        }


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

        angular.module('TrenerDB2').controller('ModalInstanceCtrl', function ($uibModalInstance, items, sharedProperties) {

            var model = this;
            model.items = items;
            model.selected = {
                item: model.items[0]
            };

            model.ok = function () {
                sharedProperties.currentSelection = model.selected.item;
                $uibModalInstance.close(model.selected.item);
            };

            model.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        });

    }()
)
;