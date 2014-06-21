angular-embedly – angular wrapper for embed.ly
==============================================

This module utilizes the embed.ly functionality and wraps it in angular entities. The module comprises a directive and a service, which supports embed.ly's embedding API and their information extraction API. 
To embed a video or a photo use the directive, and for the information extraction use the service.

Note: The directive only supports embedding of video and photo.


## Usage of angular-embedly directive

1. Add angular-embedly to your project `bower install angular-embedly`

2. Set `angular-embedly` as a dependency of your module.
  ```javascript
  var myApp = angular.module('myApp', ['angular-embedly']);
  ```
3. Set your embed.ly key in myApp.config
```javascript
myApp.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('your key');
});
  ```
4. Set ```javascript
$scope.urlToSearch = '';
  ```
in your controller

5. Add angular-embedly directive to the html, e.g.,
  ```html
  <em-embed urlsearch="{{urlToSearch}}"></em-embed>
  ```


## Example
You can check out some examples here: https://github.com/Urigo/angular-embedly/tree/master/examples
