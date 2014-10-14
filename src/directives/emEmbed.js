/**
 * Created by moran on 12/06/14.
 */

(function (module) {
    module.directive('emEmbed', ['embedlyService', function(embedlyService) {
        return {
            restrict: 'E',
            scope:{
                urlsearch: '@',
                maxwidth: '@'
            },
            controller: 'emEmbedCtrl',
            link: function(scope, element) {
                scope.$parent.loading_embedly = false;
                scope.$watch('urlsearch', function(newVal) {
                    var previousEmbedCode = scope.embedCode;
                    if (newVal) {
                        scope.$parent.loading_embedly = true;
                        embedlyService.embed(newVal, scope.maxwidth)
                            .then(function(data){
                                scope.$parent.loading_embedly = false;
                                switch(data.data.type) {
                                    case 'video':
                                        scope.embedCode = data.data.html;
                                        break;
                                    case 'photo':
                                        scope.embedCode = '<img src="' + data.data.url + '">';
                                        break;
                                    default:
                                        scope.embedCode = '';
                                }
                                if(previousEmbedCode !== scope.embedCode) {
                                    // embed code was changed from last call and has to be replaced in DOM
                                    element.html('<div>' + scope.embedCode + '</div>');
                                }
                            }, function(error) {
                                // promise rejected
                                scope.$parent.loading_embedly = false;
                                var previousEmbedCode = scope.embedCode;
                                scope.embedCode = '';
                                if(previousEmbedCode !== scope.embedCode) {
                                    element.html('<div>' + scope.embedCode + '</div>');
                                }
                            });
                    }
                });
            }
        };
    }])
})(angularEmbedly);