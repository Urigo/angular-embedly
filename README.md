angular-embedly – angular wrapper for embed.ly
==============================================

This module utilizes the embed.ly functionality and wraps it in angular entities. The module comprises a directive and a service, which supports embed.ly's embedding API and their information extraction API. 
To embed a video or a photo use the directive, and for information extraction use the service.

Note: The directive only supports embedding of video and photo.


## Usage of angular-embedly directive

* Add angular-embedly to your project `bower install angular-embedly`
* Add to your main file (index.html)
```html
 <script src="bower_components/angular-embedly/angular-embedly.js"></script>
```
* Set `angular-embedly` as a dependency of your module.
```javascript
    var myApp = angular.module('myApp', ['angular-embedly']);
```
* Set your embed.ly key in myApp.config
```javascript
    myApp.config(function(embedlyServiceProvider){
        embedlyServiceProvider.setKey('your key');
    });
```
* Add angular-embedly directive to the html
```html
    <em-embed urlsearch="{{your.url.goes.here}}"></em-embed>
```


## Example
You can check out some examples here: https://github.com/Urigo/angular-embedly/tree/master/examples
