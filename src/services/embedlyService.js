/**
 * Created by moran on 12/06/14.
 */

(function (module) {
    module.provider('embedlyService', function () {
        var key;
        var secure;
        this.setKey = function(userKey) {
            key = userKey;
            return key;
        }
        this.getKey = function() {
            return key;
        }
        this.secure = function(value) {
            if (!value) {
                return secure;
            }
            secure = value;
        }

        function getProtocol() {
            return secure ? 'https' : 'https' ;
        }

        function embedly($http) {
            this.embed = function(inputUrl, maxwidth, scheme) {
                var escapedUrl = encodeURIComponent(inputUrl);
                var embedlyRequest = getProtocol() + '://api.embed.ly/1/oembed?key=' + key + '&url=' +  escapedUrl;

                if(typeof maxwidth !== 'undefined'){
                    embedlyRequest = embedlyRequest + '&maxwidth=' + maxwidth;
                }

                if(typeof scheme !== 'undefined'){
                    embedlyRequest = embedlyRequest + '&scheme=' + scheme;
                }

                return $http({method: 'GET', url: embedlyRequest});
            };
            this.extract = function(inputUrl) {
                var escapedUrl = encodeURIComponent(inputUrl);
                var embedlyRequest = getProtocol() + '://api.embed.ly/1/extract?key=' + key + '&url=' +  escapedUrl;
                return $http({method: 'GET', url: embedlyRequest});
            };
        }


        this.$get = ['$http', function($http) {
            return new embedly($http);
        }];

    })
})(angularEmbedly);
