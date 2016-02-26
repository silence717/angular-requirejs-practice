/**
 * @description [基础资源库个人上传部分service]
 * @author [silence]
 * @date  15/11/10
 */
define(['./../module'], function(services) {
    'use strict';

    services.service('resPersonalService', ['$http',function($http){

        var users = ['perter','daniel','nina'];

        return {
            all: function() {
                return users;
            },
            first: function() {
                return users[0];
            }
        }

    }]);
});