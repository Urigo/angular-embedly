/**
 * Created by moran on 10/06/14.
 */

embedlyModule.service('embedlyService', function($http, initParams){
    this.embed = function(inputUrl) {
        var escapedUrl = escape(inputUrl);
        var embedlyRequest = 'http://api.embed.ly/1/oembed?key=' + initParams.key + '&url=' +  escapedUrl;
        return $http({method: 'GET', url: embedlyRequest});
    };
    this.extract = function(inputUrl) {
        var escapedUrl = escape(inputUrl);
        var embedlyRequest = 'http://api.embed.ly/1/extract?key=' + initParams.key + '&url=' +  escapedUrl;
        return $http({method: 'GET', url: embedlyRequest});
    };
});