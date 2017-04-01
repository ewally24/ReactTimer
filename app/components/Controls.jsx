var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string,
		onStatusChange: React.PropTypes.func
	},
	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	render: function() {
		var {countdownStatus} = this.props;

		var RenderStartStopButton = () => {
			if(countdownStatus === 'started') {
				return <button onClick={this.onStatusChange('paused')} className='button primary'>Paused</button>
			} else if(countdownStatus === 'paused') {
				return <button onClick={this.onStatusChange('started')} className='button secondary'>Start</button> 
			}
		}
		return (
			<div className='controls'>
				{RenderStartStopButton()}
				<button onClick={this.onStatusChange('stopped')} className='button alert hollow'> Clear </button>
			</div>
		)
	}
})

module.exports = Controls;