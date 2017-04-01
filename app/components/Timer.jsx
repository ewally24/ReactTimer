var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		}
	},
	propTypes: {
		count: React.PropTypes.number
	},
	componentWillUnmount: function() {
		clearInterval(this.Timer);
		this.Timer = undefined;
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
				this.startTimer();
				break;
				case 'stopped':
				this.setState({
					count: 0
				})
				case 'paused':
				clearInterval(this.Timer)
				this.Timer = undefined
				break;
			}
		}
	},
	startTimer: function() {
		this.Timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			})
		}, 1000)
	},
	handleStatusChange: function(newStatus) {
		this.setState({
			countdownStatus: newStatus
		})
	},
	handleCountdown: function(totalSeconds) {
		this.setState({
			count: totalSeconds,
			countdownStatus: 'started'
		})
	},
	render: function() {
		var {count, countdownStatus} = this.state;

		/*
		var RenderControlArea = () => {
			if(countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <CountdownForm setCountdown={this.handleCountdown}/>
			}
		}
		*/
		return (
			<div>
				<h1 className='page-title'> Timer App </h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
})

module.exports = Timer;