/**
 * @description [路由文件]
 * @author silence
 * @date 2015/11/9
 */
define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        // 默认加载首页
        $urlRouterProvider.otherwise('/home');

        $stateProvider.
            // 首页
        state('home', {
                url: '/home',
                templateUrl: 'pages/home/index.html',
                controller: 'homeCtrl'
            })
            // 我的工作台
            .state('workbench', {
                url: '/workbench',
                views: {
                    '': {
                        templateUrl: 'pages/workbench/index.html'
                    },
                    'main@workbench': {
                        templateUrl: 'pages/workbench/entry.html',
                        controller: 'entryCtrl'
                    }
                }
            })
            // 我的录入
            .state('workbench.entry', {
                url: '/entry',
                templateUrl: 'pages/workbench/entry.html',
                controller: 'entryCtrl'
            })
            // 我的收藏
            .state('workbench.collect', {
                url: '/collect',
                templateUrl: 'pages/workbench/collect.html',
                controller: 'collectCtrl'
            })
            // 基础资源库
            .state('resource', {
                url: '/resource',
                views: {
                    '': {
                        templateUrl: 'pages/resource/resource.html'
                    }
                },
                controller: 'resourceCtrl'
            })
            // 全部
            .state('resource.all', {
                url: '/all',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/all.html'
                    },
                    'list@resource.all': {
                        templateUrl: 'pages/module/thumbList.html'
                    }
                },
                controller: 'resourceAllCtrl'
            })
            // 个人上传
            .state('resource.personal', {
                url: '/personal',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/personal.html'
                    },
                    'filterCondition@resource.personal': {
                        templateUrl: 'pages/module/personalFilterTpl.html'
                    },
                    'thumbList@resource.personal': {
                        templateUrl: 'pages/module/thumbList.html'
                    },
                    'detailList@resource.personal': {
                        templateUrl: 'pages/module/detailList.html'
                    }
                },
                controller: 'personalCtrl'
            })
            // 卡口信息
            .state('resource.bayonet', {
                url: '/bayonet',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/bayonet.html'
                    }
                }
            })
            // 报警信息
            .state('resource.alarm', {
                url: '/alarm',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/alarm.html'
                    }
                }
            })
            // 实时结构化信息
            .state('resource.structure', {
                url: '/structure',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/structure.html'
                    }
                }
            })
            // 执法记录仪
            .state('resource.record', {
                url: '/record',
                views: {
                    'content@resource': {
                        templateUrl: 'pages/resource/record.html'
                    }
                }
            })
            // 统计分析
            .state('analysis', {
                url: '/analysis',
                templateUrl: 'pages/analysis/index.html'
            })
            // 示例demo
            .state('demo', {
                url: '/demo',
                templateUrl: 'pages/demo.html',
                controller: 'demoCtrl'
            });
    })
});