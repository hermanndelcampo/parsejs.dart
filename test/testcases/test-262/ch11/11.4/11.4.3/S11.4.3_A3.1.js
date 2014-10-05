// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of applying "typeof" operator to undefined is "undefined"
es5id: 11.4.3_A3.1
description: typeof undefined === "undefined"
---*/

//CHECK#1
if (typeof undefined !== "undefined") {
  $ERROR('#1: typeof undefined === "undefined". Actual: ' + (typeof undefined));
}

//CHECK#2
if (typeof void 0 !== "undefined") {
  $ERROR('#2: typeof void 0 === "undefined". Actual: ' + (typeof void 0));
}
