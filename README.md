perpetual
---------

[![Build Status](https://travis-ci.org/banterability/perpetual.svg?branch=master)](https://travis-ci.org/banterability/perpetual)

Get the day or month name from a JavaScript Date, with no concern for internationalization, localization, or not polluting prototypes.

You should probably just use [Moment.js](http://momentjs.com/).

Usage
=====

Include the file, which will add `getDayName` and `getMonthName` to the Date prototype. Then you can call it like so:

```javascript
var today = new Date(2014, 4, 19);

console.log(today.getDayName());
// -> "Monday"

console.log(today.getMonthName());
// -> "May"
```
