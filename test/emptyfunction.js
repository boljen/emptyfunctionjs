var emptyFunction = require('./../index.js');

describe('#emptyFunction()', function() {

	it('Should do nothing??', emptyFunction);

	it('Should be identifiable', function() {
		var test = emptyFunction;
		test.name.should.be.exactly('emptyFunction');
		(test === emptyFunction).should.be.true;
	});

	it('Should be distinguishable', function() {
		var test = (function emptyFunction() {});
		test.name.should.be.exactly('emptyFunction');
		(test === emptyFunction).should.be.false;
	});
});

describe('README', () => {

	it('should have a working iteration', () => {
		var example = function(cb) {
			if (!cb) cb = emptyFunction
			for (var i = 0; i < 1337; i++) cb()
		}
		example()
		example(function(){})
	})

	it('should have working isClosure and setClosure', () => {
		var isClosure=function(cb) {
			return (cb && cb !== emptyFunction) ? true: false
		}
		var setClosure=function(cb) {
			return (isClosure(cb)) ? cb : emptyFunction
		}

		var cb = null
		isClosure(cb).should.equal(false)

		cb = setClosure()

		cb.should.equal(emptyFunction)
		isClosure(cb).should.equal(false)

		cb = setClosure(function() {})
		isClosure(cb).should.equal(true)
	})
})
