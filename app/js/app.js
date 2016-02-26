/**
 * @description [文件说明]
 * @author silence
 * @date 2015/11/9
 */
define([
    'angular',
    'uiRouter',
    'uiBootstrap',
    'ngDialog',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';
    var app = ng.module('app', [
        'app.controllers',
        'app.services',
        'ui.router',
        'ngDialog',
        'ui.bootstrap'
    ]);

    app.config(['ngDialogProvider', function (ngDialogProvider) {
        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false,
            preCloseCallback: function () {
                //console.log('default pre-close callback');
            }
        });
    }]);
    return app;
});