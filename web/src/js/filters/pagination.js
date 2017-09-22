(function(){
    'use strict';

    angular
        .module('app')
        .filter('pagination', pagination);

    function pagination(){

        return paginationFilter;

        function paginationFilter(input, itemsPerPage, count){
            var currentPage = count;
            var itemsPerPage = itemsPerPage;
            var first = itemsPerPage * currentPage;
            var last = first + itemsPerPage;
            var last = last > input.length ? (input.length) : last;
            return input.slice(first, last);
        }
    }

}());