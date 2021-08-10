// funcion para borrar un caracter ingresado en la pantalla
function del() {
    let value = document.getElementById('ventana').value;
    document.getElementById('ventana').value = value.substr(0, value.length-1);
}
//codigo para controlar el cambio de color:
//mis variables
const uno = document.getElementById('uno'),
    dos = document.getElementById('dos'),
    tres = document.getElementById('tres');
//funcion expresada controladora de eventos
const cargarFun = function () {
    uno.addEventListener('click',unoFun);
     dos.addEventListener('click',dosFun);
    tres.addEventListener('click',tresFun) 
}
//mis eventos 
const dosFun = function () {
    const body = document.querySelector('body'),
     toogle = document.querySelector('#caja-circular');
    body.classList.add('active1');
    body.classList.remove('active2');
    toogle.style.left = '34%';
}
const unoFun = function () {
    const body = document.querySelector('body'),
        toogle = document.querySelector('#caja-circular');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toogle.style.left = '0';

}
const tresFun = function () {
    const body = document.querySelector('body'),
    toogle = document.querySelector('#caja-circular');
    body.classList.add('active2');
    body.classList.remove('active1');
    toogle.style.left = '73.5%';
}
//cargar eventos
cargarFun();

