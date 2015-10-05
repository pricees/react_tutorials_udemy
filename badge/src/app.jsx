var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [
    { header: "Learn React", description: "React is cool", 
        imageUrl: "https://cdn.auth0.com/blog/react-js/react.png",
        label: "Booty Count",
        badge: 125},
{ header: "Learn Go", 
        description: "Go is also cool", 
        imageUrl: "https://golang.org/doc/gopher/gopherbw.png",
        label: "Gophers",
        badge: 52}
    ]
}

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));

