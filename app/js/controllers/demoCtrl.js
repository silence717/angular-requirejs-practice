/**
 * @description [UI示例]
 * @author [silence]
 * @date  15/11/12
 */
define(['./module', 'jquery', 'cxSelect'], function (controllers) {
    'use strict';

    controllers.controller('demoCtrl', ['$scope','$http', 'ngDialog', function ($scope, $http, ngDialog) {

        // 弹出确认提示框
        $scope.confirmDialog = function() {
            ngDialog.openConfirm({
                templateUrl: 'pages/componet/dialog/confirm.html'
            }).then(function () {
                console.log('confirm');
            }, function () {
                console.log('cancel');
            });
        };
        // 初始化
        function initCitySelect() {
            $.cxSelect.defaults.url = 'data/cityData.json';

            $('#city_china').cxSelect({
                selects: ['province', 'city', 'area']
            });
        }
        initCitySelect();

    }]);
});