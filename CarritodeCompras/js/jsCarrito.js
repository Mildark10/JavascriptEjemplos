var type = new Typed('.type-js', {
    strings: ['Los Mejores Modelos ', 'A Mejores Precios'],
    loop: true,
    typeSpeed: 120
});
// variables a mi controlador carrito
const carrito = document.querySelector('#carrito');
const listaZap = document.querySelector('#lista-zapat');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let artCarrito = [];
cargarEventListeners();
//funcion del boton agregar carrito

function cargarEventListeners() {
    //fincon delacarada
    //la funcion cuando agregas un zapato presionando a gregar al carrito
    listaZap.addEventListener('click', agregarZap);
    //eliminar zapatillas del carrito
    carrito.addEventListener('click', eliminarZapat);
    //vaciar carrito=
    //cuando es pequeño el codigo es aconsejable usar funcion anonima
    vaciarCarrito.addEventListener('click', () => {
        artCarrito = []; //reset al arreglo del carrito
        limpiarHtml(); //limpiamos el html del carrito
    });
}

//cargando la funcion de añadir al carrito

function agregarZap(e) {
    //dssps de haber hecho el if agrege esta funcion
    //para  q al dar click se mantenga en esa posicion y no redirecciones x el href del a
    //es decir quita el evento x defecto del elemento a del html
    e.preventDefault(); //cuando sal dar click agregar debe existir el selector agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        //si es asi agregara al carrito
        const zapatSeleccionado = e.target.parentElement.parentElement;
        leerDatosZapat(zapatSeleccionado);
        //parent Element selecciona el elemento padre en este caso se selcciono hasta la raiz
    }
}

function eliminarZapat(e) {
    if (e.target.classList.contains('borrar-zapat')) {
        const zapatId = e.target.getAttribute('data-id');
        //eliminar del arreglo de articulos carrito x el data-id 
        artCarrito = artCarrito.filter(zapat => zapat.id !== zapatId);
        carritoHtml(); //iterar sobre el carrito y mostrar su HTML
    }
}


function leerDatosZapat(zapat) {
    //  console.log(zapat);
    //creando un obejto con el contenido de la zapatilla actual
    const infoZapat = {
            imagen: zapat.querySelector('img').src,
            titulo: zapat.querySelector('h4').textContent,
            precio: zapat.querySelector('.precio span').textContent,
            id: zapat.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        /*   control de la actualizacion de las cantidades   */
    const existeZapat = artCarrito.some(zapat => zapat.id === infoZapat.id); //va revisar si un elemento ya existe en el carrito
    if (existeZapat) {
        //actualizando la cantidad
        const zapatArreglo = artCarrito.map(zapat => {
            if (zapat.id === infoZapat.id) {
                zapat.cantidad++;
                return zapat; //actualiza la cantidad en el carrito sin duplicar en su contenido
            } else {
                return zapat; //retorna los objetos q no son los duplicados
            }
        });
        artCarrito = [...zapatArreglo];
    } else {
        //agregar elementos al arreglo de carrito
        artCarrito = [...artCarrito, infoZapat];
    }

    console.log(artCarrito);
    carritoHtml();
}
//muestra el carrito de compras en el html
function carritoHtml() {
    //limpiar Html
    limpiarHtml();
    //recorre carrito y genera el html en el tbody
    artCarrito.forEach(zapat => {
        //usando destructuring
        const { imagen, titulo, precio, cantidad, id } = zapat;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" style="width:100px;"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-zapat" data-id="${id}"> X </a></td>

            `;
        //Agregar el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHtml() {
    // forma 1->lenta contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}