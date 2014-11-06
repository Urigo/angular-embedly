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

## Optional
* In the including scope you can watch `loading_embedly` for the status of the Embed.ly request. This can be useful for making a loading indicator.

* `maxwidth` attribute can be used to specify the maximum width of the embed 
* `onempty` attribute specifies a function in the controller's scope that should be executed if Embed.ly returns an empty result
```html
    <em-embed urlsearch="{{your.url.goes.here}}" maxwidth="number" onempty="yourFunction('Ai, it is empty!')"></em-embed>
```

## Example
You can check out some examples here: https://github.com/Urigo/angular-embedly/tree/master/examples
