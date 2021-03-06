/**
 * Copyright 2017 Comcast Cable Communications Management, LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @author Oleksandr Baturynskyi (obaturynskyi@productengine.com)
 */


angular.module('uxData').controller('logoutCtrl', ['$scope', 'logoutService', 'authService',
    function logoutCtrl($scope, logoutService, authService) {
        $scope.goToRedirect = function () {
            logoutService.cleanTokenAndGoToLoginPage();
        };

        $scope.showLogoutButton = !authService.isDevProfile();

    }]);
