const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const errores = [];


formulario.addEventListener('submit', (e) => {
	e.preventDefault();