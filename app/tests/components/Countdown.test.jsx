var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

describe('handleCountdown', () => {
	it('should change state to started and countdown', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
		countdown.handleCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');

		setTimeout(() => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001)
	})

	it('when timer hits 0 timer should not increment to negative numbers', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
		countdown.handleCountdown(1);

		setTimeout(() => {
			expect(countdown.state.count).toBe(0);
			done();
		}, 3000)
		});
	});
});