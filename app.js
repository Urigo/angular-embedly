/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule', []);

embedlyModule.factory('initParams', function(){
    return {
        //here enter key
//        key: 'your key'
    }
})

embedlyModule.service('embedlyService', function($http, initParams){
    this.checkIfEnter = function(e) {
        //if enter pressed
        if(e.keyCode === 13) {
            this.checkUrl();
        }
    };
    this.checkUrl = function(requestType, urlToSearch) {
        var embedlyRequest = 'http://api.embed.ly/1/' + requestType + '?key=' + initParams.key + '&url=' +  urlToSearch;
        $http({method: 'GET', url: embedlyRequest}).
            success(function(data, status, headers, config) {
                console.log(data);
            }).
            error(function(data, status, headers, config) {
                console.log('error');
            });
    }
});