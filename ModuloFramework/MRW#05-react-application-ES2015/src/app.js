'use strict'

var React = require('react')

var Title = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'Babel :O')
    }
})

export default Title // esta importando o Title, utilizando codigo do ES2015