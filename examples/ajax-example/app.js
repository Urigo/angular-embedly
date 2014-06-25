/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule2', ['angular-embedly']);

embedlyModule.config(['embedlyServiceProvider', function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('your key');
}]);

embedlyModule.controller('embedCtrl2', function($scope, $http) {
    $scope.values = [];
    $http.get('values.json').success(function(data) {
        $scope.values = data;
    });
});