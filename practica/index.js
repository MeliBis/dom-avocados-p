//tipos de selectores
document.getElementById('firstName')
//traer info con ID
document.getElementsByTagName('input')
//traer info con tag, todos los elementos
document.getElementsByClassName('div')
//traer info con clase, todos los elementos

//leer nodos
document.querySelector('')
//devuelve el primer elemento que encuentra
document.querySelectorAll('')
//trae todos los elementos con el selector ingradado


//diferencia entre nodeList y array:
//La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.


//creacion de nodos:
document.createElement('div');
//crea elemento
document.createTextNode('hola mundo');
//crear texto

//ejemplo:
document.querySelector('divpy-5.text-center')
const h3= document.createElement('h3')
container.appendchild(h3)
//decir al padre que agregaremos un hijo
const texto= document.createTextNode('buen dia')
h3.appendChild(texto)
container.append('hello', document.createElement('div'))
//sintaxis:
document.insertBefore(node, referencia)
const titulo= document.createElement('h1')


//insertar entre h2 y la imagen:
const referencia=document.querySelector('h2');
//insertar:
container.insertBefore(titulo,referencia)

//insertBefore: el nodo de referencia tiene que ser hijo directo del nodo base

//** otra formma de agregar nodo **
//traer elemento-referencia:
const referencia1 = document.querySelector('h2')
const titulo=document.createElement('span')
referencia.insertAdjacentElement('', nodo)
//entre comillas podemos utilizar 'beforebegin', 'afterbegin','beforeend', 'afterend'

//otras formas:
//mencionan tipo de texto y tambien lo renderizas en pantalla
.outerHTML
.inner.outerHTML

//podemos reemplazar texto existente
const nuevoHTML= div.outerHTML.replace('algo nevo', 'algo viejo')

//atributos y propiedades:


//eliminar nodos:
/* .removeChild
.removeChild.repaceChild
.remove()
 */

