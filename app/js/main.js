/**
 * @description [文件说明]
 * @author silence
 * @date 2015/11/9
 */
require.config({
    paths: {
        angular: '../libs/angular/angular',
        uiRouter: "../libs/angular/angular-ui-router",
        uiBootstrap: '../libs/angular/ui-bootstrap-custom-tpls-0.14.3.min',
        ngDialog: "../libs/angular/ngDialog.min",
        css: '../libs/require/css',
        text: '../libs/require/text',
        domReady: '../libs/require/domReady',
        jquery : '../libs/jquery/jquery-1.10.2.min',
        cxSelect: '../libs/jquery/jquery.cxselect'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'ngDialog': {
            deps: ['angular']
        },
        'uiBootstrap': {
            deps: ['angular']
        },
        cxSelect: {
            deps: ['jquery']
        }
    },
    priority: ["angular"],
    deps: [
        './bootstrap'
    ]
});