(function () {
    'use strict';

    angular
        .module('app')
        .service('CartService', CartService);

    CartService.$inject = ['$http'];

    function CartService($http) {
        
        var card = [];
        this.serviceCard = card;

        function delFromCard (product) {
            card.splice(card.indexOf(product), 1);
        }

        function checkCard(currentProduct) {
            var result = true;
            card.forEach(function (element) {
                if (currentProduct.id === element.id) {
                    result = false;
                }
            });
            return result;
        }
       
        this.handler = function (e,b) {           
                if(checkCard(e)) {
                    e.cnt = 1;
                    card.push(e);
                } else {
                    e.cnt = 0;
                    delFromCard(e);
                }
                console.log(this);
      
        };

        this.addRemoveCnt = function (product, type) {
            if (type === 'minus') {
                product.cnt -= 1;
            } else {
                product.cnt += 1;
            }
            if (product.cnt === 0) {
                delFromCard(product);
            }
            
        };
       
    }
}());
