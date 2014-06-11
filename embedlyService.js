/**
 * Created by moran on 10/06/14.
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
            this.embed = function(inputUrl) {
                var escapedUrl = escape(inputUrl);
                var embedlyRequest = 'http://api.embed.ly/1/oembed?key=' + key + '&url=' +  escapedUrl;
                return $http({method: 'GET', url: embedlyRequest});
            };
            this.extract = function(inputUrl) {
                var escapedUrl = escape(inputUrl);
                var embedlyRequest = 'http://api.embed.ly/1/extract?key=' + key + '&url=' +  escapedUrl;
                return $http({method: 'GET', url: embedlyRequest});
            };
        }


        this.$get = function($http) {
            return new embedly($http);
        };

    })
    module.directive('emEmbed', function(embedlyService) {
        return {
            restrict: 'E',
            scope:{
            },
            controller: function($scope){
                $scope.embedCode = '';
            },
            link: function(scope, element, attrs, controller) {
                attrs.$observe('urlsearch', function(newVal) {
                    if (newVal) {
                        embedlyService.embed(newVal)
                            .then(function(data){
                                var previousEmbedCode = scope.embedCode;
                                scope.embedCode = '<div>' + data.data.html + '</div>';
                                if(previousEmbedCode !== scope.embedCode) {
                                    element.html(scope.embedCode);
                                }
                            }, function(error) {
                                // promise rejected
                                var previousEmbedCode = scope.embedCode;
                                scope.embedCode = '<div></div>';
                                if(previousEmbedCode !== scope.embedCode) {
                                    element.html(scope.embedCode);
                                }
                            });
                    }
                });
            }
        };
    })
})(angular.module('angular-embedly', []));

