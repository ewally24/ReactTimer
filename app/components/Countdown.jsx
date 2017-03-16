var React = require('react');

var Clock = require('Clock');;

var Countdown = React.createClass({
	render: function() {
		return (
			<div>
				<h3> <Clock totalSeconds={129}/> </h3>
			</div>
		)
	}
})

module.exports = Countdown;

