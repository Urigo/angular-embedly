/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule', ['angular-embedly']);

embedlyModule.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('your key');
});
