# slidfast #
[![Build Status](https://secure.travis-ci.org/slidfast/slidfast.png)](http://travis-ci.org/slidfast/slidfast)

slidfast is a learning framework created for the book [HTML5 and JavaScript Web Apps](http://shop.oreilly.com/product/0636920024088.do) on O'Reilly Media.
All the examples and code are explained in detail in the book.

This framework is well commented and documented so that you can learn. It is focused on the 5
HTML5 or W3C specifications that are widely supported across all modern browsers:

* Web Storage
* Web Socket
* Geolocation
* Orientation
* Web Workers

This means that we're only using native API's provided by the browsers. That's right kids, no jQuery or any other helper framework. All bloat has been removed so that we can
truly learn what is going on and get the maximum performance on our target browsers.

## Getting started
There are quite a few live examples to get you started ([source here](example/)):
* [CSS3 - slide and rotate](http://www.html5e.org/example/index.html) - is the basic example of using CSS3 transitions and AJAX loading to navigate within a single DOM.
* [CSS3 - touch](http://www.html5e.org/example/touch/) - shows how to add touch events for navigation
* [HTML5 - Orientation](http://www.html5e.org/example/orientation/) - shows how to perform basic navigation events with the Orientation API
* [HTML5 - Web Workers](http://www.html5e.org/example/workers/) - Uses Web Workers to create a thread pool and parallel processing
* [HTML5 - Web Storage](http://www.html5e.org/example/index.html) - Uses localStorage to store the dynamically loaded HTML.
* [W3C - Geolocation](http://www.html5e.org/example/geo) - shows how to track a users location with common workarounds for iOS5

## Basic Init
Include slidfast.js and slidfast.css in your html, then call:
```javascript
slidfast({
   defaultPageID:'home-page',  //required
   touchEnabled: true, //optional - gives pages native like touch and swipe functionality
   singlePageModel: true, //optional - allows pre-fetching of external links
   optimizeNetwork: true, //optional - changes loading strategy based on network type (3G, Edge, wifi, etc...)
   orientationNav: true, //optional - navigates pages when user tilts device with accelerometer
   geo: {on:true,track:true,interval:10000,callback:geoCallback}, //optional - basic Geolocation tracking
   workers: {script:'worker1.js', threads:9, mycallback:workerCallback} //optional - Web Worker thread pool

});
```

##Notes
There's a million ways this can be improved and made to support all web browsers. Right now slidfast mostly supports WebKit, Mozilla, Opera and the others need to be tested.

## Fun Facts
* I created this framework while writing [this HTML5Rocks article](http://www.html5rocks.com/en/mobile/optimization-and-performance/)
* It's used within the [JBoss Richfaces enterprise mobile offering](https://github.com/richfaces/components/tree/develop/mobile-compatibility).
* This framework is built using the same JavaScript structure as jQuery :) compare the sources and you'll see what I mean. So you can easily turn any part of it into a plugin.