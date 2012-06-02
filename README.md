# slidfast #
[![Build Status](https://secure.travis-ci.org/slidfast/slidfast.png)](http://travis-ci.org/slidfast/slidfast)

slidfast is a learning framework created for the book [HTML5 Architecture](http://shop.oreilly.com/product/0636920024088.do) on O'Reilly Media.
All the examples and code are explained in detail in the book.

This framework is well commented and documented so that you can learn. It is focused on the 5
HTML5 or W3C specifications that are widely supported across all modern browsers:

* Web Storage
* Web Socket
* Geolocation
* Orientation
* Web Workers

This means that I'm only using native API's provided by the browsers. That's right kids, no jQuery. All bloat has been removed so that we can
truly learn what is going on and get the maximum performance on our target browsers.

## Getting started
There are quite a few [examples](/slidfast/slidfast/tree/master/example/) in the root directory to get you started.
* [slide and rotate](/slidfast/slidfast/tree/master/example/index.html) - is the basic example of using CSS3 transitions and AJAX loading to navigate within a single DOM. Also uses localStorage to store the dynamically loaded HTML.
* [touch](/slidfast/slidfast/tree/master/example/touch/) - shows how to add touch events for navigation
* [orientation](/slidfast/slidfast/tree/master/example/orientation) - shows how to perform basic navigation events with the Orientation API
* [workers](/slidfast/slidfast/tree/master/example/workers) - Uses Web Workers to create a thread pool and parallel processing
* [geo](/slidfast/slidfast/tree/master/example/geo) - shows how to track a users location with common workarounds for iOS5

## Basic Init
Include slidfast.js and slidfast.css in your html, then call:
```javascript
slidfast({
   defaultPageID:'home-page',  //required
   touchEnabled: true,
   singlePageModel: true
});
```

##Notes
There's a million ways this can be improved and made to support all web browsers. Right now it's mostly supporting WebKit(100%), Mozilla(50%), and the others need impl and testing.

## Fun Facts
* I created this framework while writing [this HTML5Rocks article](http://www.html5rocks.com/en/mobile/optimization-and-performance/)
* It's used within the [JBoss Richfaces enterprise mobile offering](https://github.com/richfaces/components/tree/develop/mobile-compatibility).
* This framework is built using the same JavaScript structure as jQuery :) compare the sources and you'll see what I mean. So you can easily turn any part of it into a plugin.