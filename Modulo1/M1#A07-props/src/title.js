'use strict'

import React from 'react'

// props -> são basicamente o que são os atributos HTML
const Title = React.createClass({
    render: function() {
        return (
            <h1>
               Olá {this.props.name}! 
            </h1>
        )
    }
})

export default Title