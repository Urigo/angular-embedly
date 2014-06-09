/**
 * Created by moran on 09/06/14.
 */

embedlyModule.directive('emEmbed', function(initParams) {
    return {
        restrict: 'E',
        scope:{
            urlsearch: '=',
            checkinput: '='
        },
        controller: function($scope, $http, initParams){
            $scope.embedCode = '';
            $scope.checkUrl = function(requestType, urlToSearch) {
                var embedlyRequest = 'http://api.embed.ly/1/' + requestType + '?key=' + initParams.key + '&url=' +  urlToSearch;
                return $http({method: 'GET', url: embedlyRequest});
            }
        },
        link: function(scope, element, attrs, controller) {
            scope.checkinput.checkInputUrl = function() {
                var escapedUrl = escape(scope.urlsearch);
                    var type = 'oembed';
                    scope.checkUrl(type, escapedUrl)
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
        }
    };
});

