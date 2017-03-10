var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
	render: function() {
		return(
			<div>
				<Nav/>
				<div className='row'>
					<div className='medium-6 large-4 small-centered'>
						<h1 className='page-title'> Main Component </h1>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Main;