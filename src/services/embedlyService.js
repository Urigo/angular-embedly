/**
 * Created by moran on 12/06/14.
 */

(function (module) {
    module.provider('embedlyService', function () {
        var key;
        this.setKey = function(userKey) {
            key = userKey;
            return key;
        }
        this.getKey = function() {
            return key;
        }

        function embedly($http) {
            this.embed = function(inputUrl, maxwidth) {
                var escapedUrl = encodeURI(inputUrl);
                var embedlyRequest = 'http://api.embed.ly/1/oembed?key=' + key + '&url=' +  escapedUrl;

                if(typeof maxwidth !== 'undefined'){
                    embedlyRequest = embedlyRequest + '&maxwidth=' + maxwidth;
                }

                return $http({method: 'GET', url: embedlyRequest});
            };
            this.extract = function(inputUrl) {
                var escapedUrl = encodeURI(inputUrl);
                var embedlyRequest = 'http://api.embed.ly/1/extract?key=' + key + '&url=' +  escapedUrl;
                return $http({method: 'GET', url: embedlyRequest});
            };
        }


        this.$get = ['$http', function($http) {
            return new embedly($http);
        }];

    })
})(angularEmbedly);
