# Zepto.Detect

Extends [Zepto.js](https://github.com/madrobby/zepto) with a `detect` and 
`device` objects. Each of which provides a quick and easy way to test a variety
of browser client features, or device types. Allows you to easily detect HTML5
features or react to various device types.


## Usage
Just call upon the property you need to test. Everything returns a boolean
`true` or `false`.

EG- `$.detect.indexDB;` or `$.device.mobile;`


## Test
You can also open up the `test.html` file within the repository. This file has
a simple output of all the properties being tested within this plugin. It will
also show you whether or not your own browser has support for each of the
tested features.


## Attribution
A majority of the tests within the `detect` object are from Mark Pilgrim's
"Dive Into HTML5" section "The All-In-One Almost-Alphabetical No-Bullshit
Guide to Detecting Everything."

You can find "Dive Into HTML5" here: http://www.diveintohtml5.net/

"Dive Into HTML5" is protected by (CC BY 3.0):
http://creativecommons.org/licenses/by/3.0/