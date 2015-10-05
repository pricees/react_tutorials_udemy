var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            badge: 4,
            label: "Messages"
        }
    },
    render: function() {
        return <button className="btn btn-primary" type="button">
        {this.props.label} <span className="badge">{this.props.badge}</span>
        </button>
    }
});


