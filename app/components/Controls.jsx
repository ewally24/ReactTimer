var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string
	},
	render: function() {
		var {countdownStatus} = this.props;

		function renderStartStopButton() {
			if(countdownStatus == 'started') {
				return <button className='button secondary'> Paused </button>
			} else if(countdownStatus == 'paused') {
				return <button className='button primary'> Start </button>
			}
		}

		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button hollow alert'> Clear </button>
			</div>
		)	
	}
})

module.exports = Controls;