'use strict'

const centerRule = ({total, activePage}) => {
  if(activePage - 1 <= 0) {
    return 1;
  }
  return activePage - 1;
}

const pagination = ({ total, activePage }) => {
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
  //return Array.apply(null, { length: total }).map((_, i) => i + 1);
  
  // ES6 -> o Array.from como segundo parametro já recebe um metodo map()

  if (total <= 5) {
    return Array.from({length: total}, (_, i) => i + 1);
  }

  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({length: visiblePages}, (_, i) => i + centerRule({ total, activePage })),
    total
  ]
    
  // removendo itens duplicados do Array
  pages = pages.filter((page, index, array) => {
    return array.indexOf(page) === index;
  })

  return pages;

}

export default pagination
