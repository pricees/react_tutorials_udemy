var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
    render: function() {
        return <div className="thumbnail">
            <img src={this.props.imageUrl} width="100" height="100" alt="..." />
            <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
            <Badge label={this.props.label} badge={this.props.badge} />
            </p>
            </div>
            </div>
    }
})
