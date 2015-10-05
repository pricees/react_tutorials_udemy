var options = {
    thumbnailData: [
    { header: "Learn React", 
        description: "React is cool", 
        imageUrl: "http://formatjs.io/img/react.svg",
        label: "Booty Count",
        badge: 100},
    { header: "Learn Go", 
        description: "Go is also cool", 
        imageUrl: "https://golang.org/doc/gopher/gopherbw.png",
        label: "Gophers",
        badge: 52}
    ]
}

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));


var Badge = React.createClass({displayName: "Badge",
    getDefaultProps: function() {
        return {
            badge: 4,
            label: "Messages"
        }
    },
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.label, " ", React.createElement("span", {className: "badge"}, this.props.badge)
        )
    }
});




var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(
                function(thumbnailProps) {
                    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
                });
        return React.createElement("div", null, 
        list
        )
    }
});


var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: "{this.props.imageUrl}", alt: "..."}), 
            React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
            React.createElement(Badge, {label: this.props.label, badge: this.props.badge})
            )
            )
            )
    }
})
