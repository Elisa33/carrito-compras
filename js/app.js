//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

//registrar todos los event listeners
cargarEventListeners();
function cargarEventListeners() {
	//cuando agregamos un curso presionando 'agregar al carrito'
	listaCursos.addEventListener('click', agregarCurso);
}

//funciones
function agregarCurso(e) {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerDatosCurso(cursoSeleccionado);
	}
}

//lee el contenido y extrae info del curso
function leerDatosCurso(curso) {
	const infoCurso = {
		id: curso.querySelector('a').getAttribute('data-id'),
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		imagen: curso.querySelector('img').src,
		cantidad: 1,
	};
	// agrega elementos al arreglo de carrito
	articulosCarrito = [...articulosCarrito, infoCurso];
	console.log(articulosCarrito);

	carritoHTML();
}

// Muestra el carrito de compras en el html

function carritoHTML() {
	//limpiar el html
	limpiarHTML();

	//recorre el carrito y genera el html
	articulosCarrito.forEach((curso) => {
		const row = document.createElement('tr');
		row.innerHTML = `
        <td>${curso.titulo}</td>
        `;
		// Agrega el HTML del carrito en el tbody
		contenedorCarrito.appendChild(row);
	});
}

//elimina los cursos del tbody
function limpiarHTML() {
	//forma lenta
	//contenedorCarrito.innerHTML = '';
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}
