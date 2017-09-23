(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('popUpDirective', popUpDirective);

    popUpDirective.$inject = ['$window', 'CartService'];

    function popUpDirective($window, CartService) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'web/partials/popup.html',
            scope: {
                item: "=test"
            },
            

            controller: ModalCtrl,
            controllerAs: "vm",
            bindToController: true
        };

        return directive;

        function ModalCtrl () {
            var vm = this;
            vm.cardD = CartService.serviceCard;
            vm.addRemove = CartService.addRemoveCnt;
            vm.handler = CartService.handler;
            
            vm.closeModal = function (e) {
                if (e.target.classList.contains('modal')) {
                    vm.item = false;
                }
            };
            vm.check = function (currentProduct) {
                
                var result = false;
                vm.cardD.forEach(function (element) {
                    if (currentProduct.id === element.id) {
                        result = true;
                    }
                });
                return result;
                
            };
        }

        function link(scope, element, attrs, vm) {
            
        }
    }

})();