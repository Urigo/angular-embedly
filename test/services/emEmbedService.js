/**
 * Created by moran on 15/06/14.
 */

describe('Unit: embedlyService', function() {
    var $httpBackend;
    var service;
    var url = 'https://www.youtube.com/watch?v=vIaH35-MLsk';
    var escapedUrl = encodeURIComponent(url);
    var embedlyRequest = 'https://api.embed.ly/1/oembed?key=123&url=' +  escapedUrl;
    var provider;
    // excuted before each "it" is run.
    beforeEach(function(){

        // load the module.
        module('angular-embedly', function( embedlyServiceProvider ) {
            provider = embedlyServiceProvider;
            provider.setKey('123');
        });
        inject(function(_$httpBackend_, _embedlyService_) {
            $httpBackend = _$httpBackend_;
            service = _embedlyService_;
        });
    });

    it('return video type', function(){
        var returnData = {
            type: 'video'
        };
        var result;
        $httpBackend.expectGET(embedlyRequest).respond(returnData);

        var returnedPromise = service.embed(url);
        returnedPromise.then(function(response) {
            result = response.data;
        });
        $httpBackend.flush();
        expect(result).toEqual(returnData);
    });
})
