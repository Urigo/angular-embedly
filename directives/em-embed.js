/**
 * Created by moran on 09/06/14.
 */

embedlyModule.directive('emEmbed', function(embedlyService) {
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
});

