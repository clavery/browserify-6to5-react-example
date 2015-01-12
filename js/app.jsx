import React from 'react';
import Bar from './components/bar';


class Foobar {
  constructor() {
    console.log("init foobar");
  }

  foo() {
    console.log("foo");
  }
}


global.app = function() {
  var f = new Foobar();
  f.foo();

  var body = document.getElementsByTagName('body')[0];
  React.render(<Bar/>, body);
};

export {Foobar}
