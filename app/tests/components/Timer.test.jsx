var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should Exist', () => {
		expect(Timer).toExist();
	})

	describe('handleTimer', () => {
		it('should start timer when countdown status is set to started', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleCountdown(3);
			timer.handleStatusChange('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(5);
				expect(timer.state.countdownStatus).toBe('started');
				done();
			}, 2001)
		})

		it('should pause timer when countdown status is set to paused', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({count: 10});
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');

			setTimeout(() => {
				expect(timer.state.count).toBe(10);
				expect(timer.state.countdownStatus).toBe('paused');
				done();
			}, 2001)
		})

		it('should clear count when countdown status is set to stopped', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({count: 10});
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');

			setTimeout(() => {
				expect(timer.state.count).toBe(0);
				expect(timer.state.countdownStatus).toBe('stopped');
				done();
			}, 2001)
		})
	})
})