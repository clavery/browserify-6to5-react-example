import React from 'react';

class Bar {
  render () {
    return (
      <div>
        Foobar
      </div>
    );
  }
}

// as of 0.12 still need to wrap in React.createClass
export default React.createClass(Bar.prototype)
