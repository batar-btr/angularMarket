(function(){
    'use strict';

    angular
        .module('app')
        .factory('pagination', pagination);

    pagination.$inject = ['$http'];

    function pagination($http) {
        var currentPage = 0;
        var itemsPerPage = 3;
        var products = [];

        var service = {
            setProducts: setProducts,
            getProducts: getProducts
        };

        return service;

        function setProducts(newProducts) { 
            products = newProducts;
        }

        function getProducts(number) {
            var num = angular.isUndefined(number) ? 0 : number;
            var first = itemsPerPage * num;
            var last = first + itemsPerPage;
            currentPage = num;
            last = last > products.length ? (products.length - 1) : last;

            return products.slice(first, last);
        }
    }
})();