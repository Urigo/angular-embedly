/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule1', ['angular-embedly']);

embedlyModule.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('66f36234bd244532afc9a6e4f6afa5ec');
});

function embedCtrl($scope) {
    $scope.urlToSearch = '';
}