<?php

/* @var $this yii\web\View */

$this->title = 'EuroCart - Goods from Europe';
?>

<div ng-app="app" ng-controller="MainController as vm">
    <div class="preloader" ng-hide="vm.preloader"></div>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="icon-bar">
                        <div class="korzina-cnt">
                            <span>{{vm.card.length}}</span>
                        </div>
                            <a href=""><i class="fa fa-vk" aria-hidden="true"></i></a>
                            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href=""><i id="callback-btn" class="fa fa-phone" aria-hidden="true"></i></a>
                            <a href="" ng-click="vm.goToCart()"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    </div>
                    <h1>EURO Market</h1>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-lg12">
                <p><a href="#/!">Main</a></p>
    
                <a href="cart">cart</a>
                <a href="main">main</a>
    
                
            </div>
        </div>
    </div>
    <div class="filter-bar container">
    <div class="row">
        <div class="col-lg-12">
            <form name="filterForm">
                <label>
                    <input type="radio" ng-model="vm.filterItem" value="-price">
                    По убыванию цены
                </label>
                <label>
                    <input type="radio" ng-model="vm.filterItem" value="price">
                    По возрастанию цены
                </label>
                <label>
                    <input type="radio" ng-model="vm.filterItem" value="id">
                    По рейтингу
                </label>
                <label>
                    <input type="radio" ng-model="vm.filterItem" value="-id">
                    По новинкам
                </label>
            </form>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item-card" ng-repeat="product in vm.products | orderBy : vm.filterItem | pagination : vm.itemsPerPage : vm.currentPage">
                <div class="item-card-wrap">
                    <p ng-cloak>{{product.name}}</p>
                    <img src="{{product.image}}" alt="{{ product.name }}" class="img-responsive" ng-click="vm.getCurrentProduct = product">
                    <p ng-cloak>{{product.price}}</p>
                    <div class="wrapcard">
                        <div ng-click="vm.addRemoveCnt(product, 'minus')" class="cardbutton btnremove" ng-show="vm.check(product)">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </div>
                        <div ng-click="vm.addRemoveCnt(product, 'plus')" class="cardbutton btnadd" ng-show="vm.check(product)">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <a href="" class="tocard" ng-class="{oncard: vm.check(product)}" ng-click = "vm.handler(product)">В корзину</a>
                        <div class="itemcnt" ng-show="vm.check(product)"><span>{{product.cnt}}</span></div>
                    </div>
                </div>
            </div>
    </div>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
                <button type="button" class="btn btn-warning" ng-repeat="product in vm.products | limitTo : vm.limitValue" ng-click="vm.currentPage = $index">{{$index+1}}</button>
            
            <ul>
                <li ng-repeat="product in vm.products | pagination : vm.itemsPerPage : vm.currentPage">{{product.id}}</li>
            </ul>
        </div>
    </div>
</div>
<pop-up-directive ng-hide="!vm.getCurrentProduct" test="vm.getCurrentProduct" class="popup" ></pop-up-directive>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 ">
                <ul class="cardlist">
                    <li class="itemoncard" ng-animate ng-repeat="product in vm.card">{{product.name}}, {{product.price}} Cnt:{{product.cnt}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div ng-view></div>
    </div>
    
</div>
