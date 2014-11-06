/**
 * Created by moran on 12/06/14.
 */

(function (module) {
    module.directive('emEmbed', ['embedlyService', function(embedlyService) {
        return {
            restrict: 'E',
            scope:{
                urlsearch: '@',
                maxwidth: '@',
                onempty: '&'
            },
            controller: 'emEmbedCtrl',
            link: function(scope, element, attributes) {
                
                // This function should be called when the oEmbed returns no embed code
                function handleEmpty(){
                    if(scope.onempty != undefined && typeof(scope.onempty) == "function"){
                        scope.onempty();
                    }
                }
                
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
                                        if(data.data.html == undefined){
                                            handleEmpty();
                                        }else{
                                            scope.embedCode = data.data.html;
                                        }
                                        break;
                                    case 'photo':
                                        if(data.data.url == undefined){
                                            handleEmpty();
                                        }else{
                                            scope.embedCode = '<img src="' + data.data.url + '">';
                                        }
                                        break;
                                    default:
                                        // call the dev's handling code, he probably assumed he would get a video 
                                        // or photo (otherwise he'd use a different tool), so for him this result
                                        // is the same as an empty result.
                                        handleEmpty();
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