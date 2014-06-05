/**
 * Created by moran on 05/06/14.
 */

embedlyModule.directive('embedly', function($http, initParams) {
    return {
        restrict: 'E',
        scope:{
        },
        controller: function($scope){
            $scope.urlToSearch = "";
            $scope.checkIfEnter = function(e) {
                //if enter pressed
                if(e.keyCode === 13) {
                    $scope.checkUrl();
                }
            }
            $scope.checkUrl = function() {
//                var embedlyRequest = 'http://api.embed.ly/1/extract?url=' +  $scope.urlToSearch;
                var embedlyRequest = 'http://api.embed.ly/1/oembed?key=' + initParams.key + '&url=' +  $scope.urlToSearch;
                $http({method: 'GET', url: embedlyRequest}).
                    success(function(data, status, headers, config) {
                        console.log(data);
                    }).
                    error(function(data, status, headers, config) {
                        console.log('error');
                    });
            }
        },
        template: '<input type="text" ng-model="urlToSearch" ng-keypress="checkIfEnter($event)">' +
            '<button ng-click="checkUrl()">search url</button>'
    };
});