'use strict'

// test sendo executado pelo comando node na linha de comando
const sum = require ('./sum')

// console.log(sum(1, 2))
// console.log(sum(1, 2) === 3)
// console.log(sum(1, 1) === 2)

/* 
TDD -> Test Driven Development

Segue por 3 passos.
RED -> Segue um passo para uma implementação inexistente e execute o teste. O TESTE DEVE QUEBRAR
GREEN -> Faça a implementação do codigo e executa o teste. O TESTE DEVE PASSAR.
BLUE -> Existe codigo duplicado ? REFATORAÇÃO. Nesse passo, nenhum teste anterior deve quebrar. Momento da refatoração do codigo.

para aplicar o TDD é importante fazer Baby-Steps, ou seja, testar cada teste separamente, passo a passo.

*/

// 2 parametros -> 1º O teste que será realizado, 2º Mensagem que será passada se o teste quebrar.
// caso o teste dê sucesso não irá retornar nada, do contrario será exibido a mensagem de erro.
console.assert(typeof sum === 'function', 'sum deve ser uma função')

console.assert(
    sum(1, 2) === 3,
    'Should Sum(1, 2) return 3'
)

console.assert(
    sum(2, 3) === 5,
    'Should Sum(2, 3) return 5'
)

console.log('All tests passed!') // caso caia em algum fluxo de erro, o codigo não será mais executado, não sendo passado por essa linha.