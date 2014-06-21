/**
 * Created by moran on 18/06/14.
 */

describe('Unit: embedlyDirective', function() {
    var scope;
    var element;
    var compile;
    var q;
    var mockService;
    beforeEach(function(){
        // load the module.
        module('angular-embedly', function ($provide) {
            mockService = {
                embed: function () {
                    deferred = q.defer();
                    // Place the fake return object here
                    deferred.resolve({ 'data': {'type': 'video',
                        'html': 'video iframe'
                    }});
                    return deferred.promise;
                }
            };
            $provide.value("embedlyService", mockService);
        });
        inject(function($rootScope, $compile, $q) {
            scope = $rootScope;
            compile = $compile;
            q = $q;
        });

        scope.urlToSearch = 'https://www.youtube.com/watch?v=t5hf2SIDuWQ';
        element = angular.element('<em-embed urlsearch="{{urlToSearch}}"></em-embed>');
        compile(element)(scope);
        scope.$digest();
    });

    it('should change urlsearch in element isolated scope', function () {
        expect(element.isolateScope().urlsearch).toBe('https://www.youtube.com/watch?v=t5hf2SIDuWQ');
    });

    it('should put video iframe in directive', function () {
        expect(element.html()).toBe('<div>video iframe</div>');
    });

});