'use strict';

var version = "1.0.0";

function Foo() {
  return "Hello World!" + version;
}

function main () {
  console.log(Foo());
}

module.exports = main;
