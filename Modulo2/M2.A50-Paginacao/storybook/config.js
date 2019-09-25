import { configure } from '@kadira/storybook'

// forma para o loadStories pegar todas as historias em diferentes lugares.
// somente o webpack tem a opção de fazer essa configuração.
const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach(fileName => req(fileName))
}

configure(loadStories, module)
