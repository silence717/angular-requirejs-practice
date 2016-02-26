/**
 * @description [文件说明]
 * @author silence
 * @date 2015/11/9
 */
define([
    'require',
    'angular',
    'app',
    'routers'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});