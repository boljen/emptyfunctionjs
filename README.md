# emptyFunction (Javascript)

The module exports nothing but an empty function/closure.

## install

    npm install emptyfunction

## Usage

Get the empty closure from the module

    var emptyFunction = require('emptyfunction');

Now use the function whenever there is an optional closure within your code.

    function example(cb) {
      if (!cb) cb = emptyFunction
      for (var i = 0; i < 1337; i++) cb()
    }

### isEmptyFunction

Sometimes you might need to verify whether the closure is an empty function.

If you have access to the emptyFunction object you can do a strict comparison.

    this.someFunction === emptyFunction

If not, a more hacky solution is to use the name of the function:    

    this.someFunction.name === 'emptyFunction'

### Utilities

A simple function to check whether we're dealing with an actual closure:

    function isClosure(cb) {
      return (cb && cb !== emptyFunction) ? true: false
    }

A simple function to make assigning closures easier:

    function setClosure(cb) {
      return (isClosure(cb)) ? cb : emptyFunction
    }

    // Usage:
    var myClosure = setClosure(cb)

## License

MIT
