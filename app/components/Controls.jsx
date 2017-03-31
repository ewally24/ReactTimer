var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	render: function() {
		var {countdownStatus} = this.props;

		
		var renderStartStopButton = () => {
			if(countdownStatus === 'started') {
				return <button onClick={this.onStatusChange('paused')} className='button secondary'>Paused</button>
			} else if(countdownStatus === 'paused') {
				return <button onClick={this.onStatusChange('started')} className='button primary'>Start</button>
			}
		};
		
		/* Why U no work if you the same thing?
		function renderStartStopButton() {
			if(countdownStatus === 'started') {
				return <button onClick={this.onStatusChange('paused')} className='button secondary'>Paused</button>
			} else if(countdownStatus === 'paused') {
				return <button onClick={this.onStatusChange('start')} className='button primary'>Start</button>
			}
		};
		*/

		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button hollow alert' onClick={this.onStatusChange('stopped')}> Clear </button>
			</div>
		)	
	}
})

module.exports = Controls;