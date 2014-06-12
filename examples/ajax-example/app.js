/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule2', ['angular-embedly']);

embedlyModule.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('your key');
});

function embedCtrl2($scope, $http) {
//    $scope.values = [];
//    $http.get('values.json').success(function(data) {
//        $scope.values = data;
//    });
    $scope.values = [
        {
            "firstName": "Liv",
            "lastName": "Boeree",
            "inputUrl": "https://www.youtube.com/watch?v=errZYGLKeIM"
        },
        {
            "firstName": "Annette",
            "lastName": "Obrestad",
            "inputUrl": "https://www.youtube.com/watch?v=w_HaaEGstd8"
        },
        {
            "firstName": "Vanessa",
            "lastName": "Selbst",
            "inputUrl": "https://www.youtube.com/watch?v=thi4g02W7q4"
        }
    ]
}