'use strict'

import React from 'react'

// App no caso será a nossa aplicação, para o hot-loader funcionar corretamente os componentes devem ser centralizados dentro de 1 pagina responsavel por toda a aplicação.
// esta pagina no caso é este .js chamado app.js 
const App = React.createClass({
    render: function () {
        return <div>Aplicação</div>
    }
})

export default App // esta importando o APP, utilizando codigo do ES2015