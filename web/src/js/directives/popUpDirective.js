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
            templateUrl: '../partials/popup.html',
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
        }

        function link(scope, element, attrs, vm) {
            
        }
    }

})();