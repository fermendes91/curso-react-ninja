'use strict'

const centerRule = ({ total, activePage }) => {
  return activePage - 1 <= 0
    ? 1 : activePage === total
      ? activePage - 2
      : activePage - 1
}

const isNumber = value => typeof (value) === 'number'

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  /* até o map a implementação esta criando um array de undefineds
    este array terá o tamanho da variavel passada como parametro ( total )
    convertemos este array de undefineds para o que precisamos
    se recebermos 5, temos que retornar um array com 5 paginas
    [1, 2, 3, 4, 5].

    O _ na chamada representa um item que não será utilizado na iteração,
    como é um array de undefineds que estamos iterando não é necessario
    passar valor, então o _ representa este dado que não será usado
    pela implementação.
    */

  // ES5
  // return Array.apply(null, { length: total }).map((_, i) => i + 1);

  // ES6 -> o Array.from como segundo parametro já recebe um metodo map()

  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
    total
  ]

  // removendo itens duplicados do Array
  pages = pages.filter((page, index, array) => {
    return array.indexOf(page) === index
  })

  // regra paginação para a primeira pagina
  let firstPage = pages[0]
  let secondPage = pages[1]

  if (secondPage === (firstPage + 2)) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1) // removendo o primeiro indice do array e retornando os demais
    ]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > (firstPage + 2)) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
  }

  // regra de paginação para a ultima pagina
  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1), // removendo o ultimo item do array e retornando os demais
      lastPage - 1,
      lastPage
    ]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }

  return pages
}

export default pagination
