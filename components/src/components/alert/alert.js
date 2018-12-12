"use strict";
var b = 'b'

function a() {
  console.log(this)
  console.log(this.b)
  this.b = 'bb'
}
a.prototype.getB = function() {
  console.log(this.b)
}
a()
(new a()).getB()