'use strict';
function HeaderComponent () {
}

angular.module('tableApp')
  .component('header', {
    templateUrl: 'header/header.html',
    controller: HeaderComponent,
    controllerAs: 'tableCtrl'
  });

