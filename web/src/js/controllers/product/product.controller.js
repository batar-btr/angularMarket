(function () {
    "use strict";

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', '$log', '$location', 'CartService', 'pagination'];
    function MainController ($http, $log, $location, CartService, pagination) {
        const vm = this;

        vm.products = [];
        vm.card = CartService.serviceCard;
        vm.getCurrentProduct = false;
        vm.preloader = false;
        vm.currentPage = 0;
        vm.itemsPerPage = 8;
        vm.filterItem = 'price';

        vm.goToCart = function () {
            $location.path('/cart');
        };
        
        vm.check = function (currentProduct) {
            var result = false;
            vm.card.forEach(function (element) {
                if (currentProduct.id === element.id) {
                    result = true;
                }
            });
            return result;
            
        };
       
        
        

        vm.handler = CartService.handler;
        vm.addRemoveCnt = CartService.addRemoveCnt;
        
        
        

        active();

        

        ////

        function active () {
            getProducts();
        }
        
        

        function getProducts () {
            $http.get('web/json/products.json').then(function mySuccess(response) {
                vm.products = response.data;
                vm.limitValue = Math.ceil(vm.products.length/vm.itemsPerPage);
                vm.preloader = true;
            }, function myError(response) {
                console.log('error');
            });
        }
        // function getProducts () {
        //     $http.get('api/product').then(function (req) {
        //         if (req.data.success) {
        //             vm.products = req.data.data;
        //             vm.limitValue = Math.ceil(vm.products.length/vm.itemsPerPage);
        //         } else {
        //             console.log('error');
        //         }
        //     }).then(function(){
        //         vm.preloader = true;
        //         console.log(JSON.stringify(vm.products));
        //     });
        // }
    }
}());
