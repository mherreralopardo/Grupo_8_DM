window.addEventListener('load', function () {
    
    //Capturar el formulario 
    let formulario = document.querySelector('.register-form');
    //Destructuring  
    let { firstName, lastName, DNI, city, email, password, terms } = formulario.elements;
    let avatarImg = document.querySelector('#avatar-img')
    let errores = [];
    console.log('ESTO TRAE IMAGEN-------------------');
    console.log(avatarImg);
    
    // etiquetas p donde se imprimiran los errores
    let firstNameErrors = document.querySelector('#printError-firstName');
    let lastNameErrors = document.querySelector('#printError-lastName');
    let DNIErrors = document.querySelector('#printError-DNI');
    let cityErrors = document.querySelector('#printError-city');
    let emailErrors = document.querySelector('#printError-email');
    let passwordErrors = document.querySelector('#printError-password');
    let avatarImgErrors = document.querySelector('#printError-avatarImg');
    let termsErrors = document.querySelector('#printError-terms');

    // validaciones firstName
    firstName.addEventListener('blur', function(){
        if (firstName.value == '') {
            firstNameErrors.innerText = 'El campo nombre no puede estar vacío'
            errores.push('El campo nombre no puede estar vacío');
            firstName.classList.add('is-invalid');

        } else if (firstName.value.length < 2 ){
            firstNameErrors.innerText = 'El nombre debe contener al menos 2 caracteres'
            errores.push('El nombre debe contener al menos 2 caracteres');
            firstName.classList.add('is-invalid');
        } else {
            firstNameErrors.innerText = ''
            firstName.classList.add('is-valid');
            firstName.classList.remove('is-invalid');
        }
    })

    
    // validaciones lastName
    lastName.addEventListener('blur', function(){
        if (lastName.value == '') {
            lastNameErrors.innerText = 'El campo apellido no puede estar vacío'
            errores.push('El campo nombre no puede estar vacío');
            lastName.classList.add('is-invalid');

        } else if (lastName.value.length < 2 ){
            lastNameErrors.innerText = 'El apellido debe contener al menos 2 caracteres'
            errores.push('El apellido debe contener al menos 2 caracteres');
            lastName.classList.add('is-invalid');
        } else {
            lastNameErrors.innerText = ''
            lastName.classList.add('is-valid');
            lastName.classList.remove('is-invalid');
        }
    })



    // validaciones DNI
    DNI.addEventListener('blur', function(){
        if (DNI.value == '') {
            DNIErrors.innerText = 'El campo DNI no puede estar vacío'
            errores.push('El campo DNI no puede estar vacío');
            DNI.classList.add('is-invalid');

        } else if (DNI.value.length < 8 ){
            DNIErrors.innerText = 'El DNI debe contener al menos 8 números'
            errores.push('El DNI debe contener al menos 8 números');
            DNI.classList.add('is-invalid');
        } else {
            DNIErrors.innerText = ''
            DNI.classList.add('is-valid');
            DNI.classList.remove('is-invalid');
        }
    })



    //validaciones city
    city.addEventListener('blur', function(){
        if (city.value == '') {
            cityErrors.innerText = 'El campo ciudad no puede estar vacío'
            errores.push('El campo ciudad no puede estar vacío');
            city.classList.add('is-invalid');
        } else {
            cityErrors.innerText = ''
            city.classList.add('is-valid');
            city.classList.remove('is-invalid');
        }
    })


    //validaciones email
    email.addEventListener('blur', function(){
        if (email.value == '') {
            emailErrors.innerText = 'El campo email no puede estar vacío'
            errores.push('El campo email no puede estar vacío');
            email.classList.add('is-invalid');
        } else {
            emailErrors.innerText = ''
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
    })

    // validaciones password
    password.addEventListener('blur', function(){
        if (password.value == '') {
            passwordErrors.innerText = 'El campo constraseña no puede estar vacío'
            errores.push('El campo contraseña no puede estar vacío');
            password.classList.add('is-invalid');

        } else if (password.value.length < 8 ){
            passwordErrors.innerText = 'La contraseña debe contener al menos 8 caracteres'
            errores.push('La contraseña debe contener al menos 8 caracteres');
            password.classList.add('is-invalid');
        } else {
            passwordErrors.innerText = ''
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
    })


// validaciones password
    password.addEventListener('blur', function(){
        if (password.value == '') {
            passwordErrors.innerText = 'El campo constraseña no puede estar vacío'
            errores.push('El campo contraseña no puede estar vacío');
            password.classList.add('is-invalid');

        } else if (password.value.length < 8 ){
            passwordErrors.innerText = 'La contraseña debe contener al menos 8 caracteres'
            errores.push('La contraseña debe contener al menos 8 caracteres');
            password.classList.add('is-invalid');
        } else {
            passwordErrors.innerText = ''
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
    })


    // validaciones avatarImg
    avatarImg.addEventListener('change', function(){
        //         let myString = "Pedro, Angel, David, Mario";
        // let myRegex = /David/;
        // let result = myRegex.test(myString); // Returns true
        //         Ejemplo
        // Buscar una cadena para el carácter "e" :
        
        let acceptedFiles  = /(.jpg|.jpeg|.png|.gif)$/i;
        let image
        if(avatarImg.files[0] != undefined){
            image = avatarImg.files[0].name
        
            let imageIsValid = acceptedFiles.test(image)

            if (!imageIsValid || !image == undefined) {
                avatarImgErrors.innerText = 'Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif'
                errores.push('Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif');
                avatarImg.classList.add('is-invalid');
            } else {
                avatarImgErrors.innerText = ''
                avatarImg.classList.add('is-valid');
                avatarImg.classList.remove('is-invalid');
            }
        } else {
            avatarImgErrors.innerText = ''
            avatarImg.classList.add('is-valid');
            avatarImg.classList.remove('is-invalid');
        }
    })




        //submit
    formulario.addEventListener('submit', function (evento) {

        evento.preventDefault();

        errores = []

        // validaciones firstName
            if (firstName.value == '') {
                firstNameErrors.innerText = 'El campo nombre no puede estar vacío'
                errores.push('El campo nombre no puede estar vacío');
                firstName.classList.add('is-invalid');

            } else if (firstName.value.length < 2 ){
                firstNameErrors.innerText = 'El nombre debe contener al menos 2 caracteres'
                errores.push('El nombre debe contener al menos 2 caracteres');
                firstName.classList.add('is-invalid');
            } else {
                firstNameErrors.innerText = ''
                firstName.classList.add('is-valid');
                firstName.classList.remove('is-invalid');
            }
        // validaciones lastName
            if (lastName.value == '') {
                lastNameErrors.innerText = 'El campo apellido no puede estar vacío'
                errores.push('El campo nombre no puede estar vacío');
                lastName.classList.add('is-invalid');

            } else if (lastName.value.length < 2 ){
                lastNameErrors.innerText = 'El apellido debe contener al menos 2 caracteres'
                errores.push('El apellido debe contener al menos 2 caracteres');
                lastName.classList.add('is-invalid');
            } else {
                lastNameErrors.innerText = ''
                lastName.classList.add('is-valid');
                lastName.classList.remove('is-invalid');
            }
        // validaciones DNI
            if (DNI.value == '') {
                DNIErrors.innerText = 'El campo DNI no puede estar vacío'
                errores.push('El campo DNI no puede estar vacío');
                DNI.classList.add('is-invalid');

            } else if (DNI.value.length < 8 ){
                DNIErrors.innerText = 'El DNI debe contener al menos 8 números'
                errores.push('El DNI debe contener al menos 8 números');
                DNI.classList.add('is-invalid');
            } else {
                DNIErrors.innerText = ''
                DNI.classList.add('is-valid');
                DNI.classList.remove('is-invalid');
            }
        //validaciones city
            if (city.value == '') {
                cityErrors.innerText = 'El campo ciudad no puede estar vacío'
                errores.push('El campo ciudad no puede estar vacío');
                city.classList.add('is-invalid');
            } else {
                cityErrors.innerText = ''
                city.classList.add('is-valid');
                city.classList.remove('is-invalid');
            }
        //validaciones email
            if (email.value == '') {
                emailErrors.innerText = 'El campo email no puede estar vacío'
                errores.push('El campo email no puede estar vacío');
                email.classList.add('is-invalid');
            } else {
                emailErrors.innerText = ''
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }
        // validaciones password
            if (password.value == '') {
                passwordErrors.innerText = 'El campo constraseña no puede estar vacío'
                errores.push('El campo contraseña no puede estar vacío');
                password.classList.add('is-invalid');

            } else if (password.value.length < 8 ){
                passwordErrors.innerText = 'La contraseña debe contener al menos 8 caracteres'
                errores.push('La contraseña debe contener al menos 8 caracteres');
                password.classList.add('is-invalid');
            } else {
                passwordErrors.innerText = ''
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }
        // validaciones password
            if (password.value == '') {
                passwordErrors.innerText = 'El campo constraseña no puede estar vacío'
                errores.push('El campo contraseña no puede estar vacío');
                password.classList.add('is-invalid');

            } else if (password.value.length < 8 ){
                passwordErrors.innerText = 'La contraseña debe contener al menos 8 caracteres'
                errores.push('La contraseña debe contener al menos 8 caracteres');
                password.classList.add('is-invalid');
            } else {
                passwordErrors.innerText = ''
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }
        // validaciones avatarImg
            let acceptedFiles  = /(.jpg|.jpeg|.png|.gif)$/i;
            let image
            if(avatarImg.files[0] != undefined){
                image = avatarImg.files[0].name
            
                let imageIsValid = acceptedFiles.test(image)

                if (!imageIsValid || !image == undefined) {
                    avatarImgErrors.innerText = 'Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif'
                    errores.push('Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif');
                    avatarImg.classList.add('is-invalid');
                } else {
                    avatarImgErrors.innerText = ''
                    avatarImg.classList.add('is-valid');
                    avatarImg.classList.remove('is-invalid');
                }
            } else {
                avatarImgErrors.innerText = ''
                avatarImg.classList.add('is-valid');
                avatarImg.classList.remove('is-invalid');
            }
        //validaciones terms
            if (terms.checked == false) {
                termsErrors.innerText = 'Debe aceptar los terminos y condiciones'
                errores.push('Debe aceptar los terminos y condiciones');
                terms.classList.add('is-invalid');
            } else {
                termsErrors.innerText = ''
                terms.classList.add('is-valid');
                terms.classList.remove('is-invalid');
            }
    

        if (errores.length > 0) {
                
            console.log('Hay errores en el formulario: ' + errores);
                
        } else {
            formulario.submit();
        }

    })

})