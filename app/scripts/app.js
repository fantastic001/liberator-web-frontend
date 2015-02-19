'use strict';

require('angular');

/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    require('auth')
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'));

