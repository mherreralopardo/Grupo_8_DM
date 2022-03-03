window.addEventListener('load', function () {
    //Capturar el formulario 
    let formulario = document.querySelector('.form'); 
    
    console.log(formulario.elements.password.value)
    //en login la clase "form" esta en un dic. Lo pruebo así y si no funciona
    //tenfremos que poner una clase en el form 
    //console.log(formulario.elements.email.value);


    //Destructuring  
    let { email, password } = formulario.elements;
    let errores = [];
    //console.log(formulario.elements.confirm_password.value);

    let emailError = document.querySelector('#printError-email');
    let passwordError = document.querySelector('#printError-password');
    //Validar Email
    email.addEventListener('blur', function () {
        if (email.value == '') {
            emailError.innerText = 'El campo e-mail no puede estar vacío'
            errores.push('El campo e-mail no puede estar vacio');
            email.classList.add('is-invalid');
            //errores['name'] = 'El campo nombre no puede estar vacio';
        } else if (email.value.indexOf('@')==-1){
            
            emailError.innerText = 'Formato de e-mail invalido'
            errores.push('El campo e-mail no puede estar vacio');
            email.classList.add('is-invalid');
        }else{
            emailError.innerText = ''
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
    })
    password.addEventListener('blur', function () {
        
        //Validar Contraseña
        if (password.value == '') {
            passwordError.innerText = 'Debe completar el campo password'
            errores.push('Debe completar el campo password');
            password.classList.add('is-invalid');
            //errores['Precio'] = 'El producto no puede ser gratuito';
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
    })

/*
    //enviar errores al usuario
    let ulErrores = document.getElementById('errores');
    ulErrores.classList.add('alert-danger')
    if (errores.length > 0) {
        evento.preventDefault();
        ulErrores.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += `<li> ${errores[i]} </li> `
        }
        errores = [];
    } else {
        return true;
    }
*/

    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }
    })
})