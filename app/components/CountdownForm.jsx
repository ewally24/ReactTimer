var React = require('react');

var CountdownForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var seconds = this.refs.seconds.value;

		console.log('input elements count', $('input').length);

		if(seconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.setCountdown(parseInt(seconds, 10));
		}
	},
	render: function() {
		return (
			<div>
				<form ref='form' onSubmit={this.onFormSubmit} className='countdown-form'>
					<input type='text' ref='seconds' placeholder='Enter Seconds'/>
					<button className='button hollow expanded'> Start Countdown </button>
				</form>
			</div>
		)
	}
})

module.exports = CountdownForm;