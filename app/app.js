'use strict';

/**
 * @ngdoc overview
 * @name tableExampleApp
 * @description
 * # tableExampleApp
 *
 * Main module of the application.
 */
angular
  .module('tableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E',
    'ui.router',
    'ui.bootstrap'
  ])
  .run(function($httpBackend) {
    var tabel1Data = {
      "tableName": "table1",
      "table": {
        "col1": {
          type: "varchar",
          data: [
            "a",
            "abc",
            "abcd"
          ]
        },
        "col2": {
          type: "date",
          data: [
            "Tue Oct 25 2016 11:57:37 GMT+0300 (MSK)",
            "Tue Oct 22 2014 10:57:37 GMT+0300 (MSK)"
          ]
        },
        "col3": {
          type: "float",
          data: [
            3.21,
            3.25,
            7.386
          ]
        },
        "col4": {
          type: "int",
          data: [
            156,
            785,
            2,
            786
          ]
        }
      }
    };
    var tabelsName = ['table1', 'table2', 'table3', 'table4', 'table5', 'table6', 'table7', 'table8', 'table9'];
    $httpBackend.whenGET('/table').respond(function() {
      return [200, tabel1Data];
    });
    $httpBackend.whenGET('/tablesList').respond(function() {
      return [200, tabelsName];
    });
    $httpBackend.whenGET(/.html|.json/).passThrough(); // Requests for templates are handled by the real server
  });
