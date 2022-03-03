window.addEventListener('load', function () {
    
    //Capturar el formulario 
    let formulario = document.querySelector('.product__upload-form');
    //Destructuring  
    let { name, price, description} = formulario.elements;
    // let description = document.querySelector('#description')
    let productImg = document.querySelector('#image')
    let errores = [];
    
    
    // etiquetas p donde se imprimiran los errores
    let productNameErrors = document.querySelector('#printError-productName');
    let productPriceErrors = document.querySelector('#printError-productPrice');
    let productImageErrors = document.querySelector('#printError-productImage');
    let productDescriptionErrors = document.querySelector('#printError-productDescritpion');
    
    // validaciones nombre de artículo
    name.addEventListener('blur', function(){
        if (name.value == '') {
            productNameErrors.innerText = 'El campo nombre no puede estar vacío'
            errores.push('El campo nombre no puede estar vacío');
            name.classList.add('is-invalid');

        } else if (name.value.length < 5 ){
            productNameErrors.innerText = 'El nombre del artículo debe contener al menos 5 caracteres'
            errores.push('El nombre del artículo debe contener al menos 5 caracteres');
            name.classList.add('is-invalid');
        } else {
            productNameErrors.innerText = ''
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        }
    })

    
    // validaciones Precio
    price.addEventListener('blur', function(){
        if (price.value <0.1) {
            productPriceErrors.innerText = 'El artículo no puede ser gratuito'
            errores.push('El artículo no puede ser gratuito');
            price.classList.add('is-invalid');

        } else {
            productPriceErrors.innerText = ''
            price.classList.add('is-valid');
            price.classList.remove('is-invalid');
        }
    })


    // validaciones descripción de artículo
    description.addEventListener('blur', function(){
        if (description.value.length < 30) {
            productDescriptionErrors.innerText = 'El artículo debe tener descripción'
            errores.push('El artículo debe tener descripción');
            description.classList.add('is-invalid');

        // } else if (description.value.length < 10 ){
        //     productDescriptionErrors.innerText = 'La descripción debe tener al menos 10 carácteres'
        //     errores.push('La descripción debe tener al menos 10 carácteres');
        //     description.classList.add('is-invalid');
        } else {
            productDescriptionErrors.innerText = ''
            description.classList.add('is-valid');
            description.classList.remove('is-invalid');
        }
    })



     

    // validaciones productImg
    image.addEventListener('change', function(){
        //         let myString = "Pedro, Angel, David, Mario";
        // let myRegex = /David/;
        // let result = myRegex.test(myString); // Returns true
        //         Ejemplo
        // Buscar una cadena para el carácter "e" :
        
        let acceptedFiles  = /(.jpg|.jpeg|.png|.gif)$/i;
        if(productImg.files[0] != undefined){
            image = productImg.files[0].name
        }
    
        let imageIsValid = acceptedFiles.test(image)
        // console.log(imageIsValid);

        if (!imageIsValid || !image == undefined) {
            productImageErrors.innerText = 'Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif'
            errores.push('Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif');
            productImg.classList.add('is-invalid');
        } else {
            productImageErrors.innerText = ''
            productImg.classList.add('is-valid');
            productImg.classList.remove('is-invalid');
        }

        ;
    })




        //submit
    formulario.addEventListener('submit', function (evento) {

        evento.preventDefault();

        errores=[];


 // validaciones nombre de artículo
     if (name.value == '') {
        productNameErrors.innerText = 'El campo nombre no puede estar vacío'
        errores.push('El campo nombre no puede estar vacío');
        name.classList.add('is-invalid');

    } else if (name.value.length < 5 ){
        productNameErrors.innerText = 'El nombre del artículo debe contener al menos 5 caracteres'
        errores.push('El nombre del artículo debe contener al menos 5 caracteres');
        name.classList.add('is-invalid');
    } else {
        productNameErrors.innerText = ''
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
    }



// validaciones Precio
    if (price.value <0.1) {
        productPriceErrors.innerText = 'El artículo no puede ser gratuito'
        errores.push('El artículo no puede ser gratuito');
        price.classList.add('is-invalid');

    } else {
        productPriceErrors.innerText = ''
        price.classList.add('is-valid');
        price.classList.remove('is-invalid');
    }



// validaciones descripción de artículo
    // if (description.value.length < 30) {
    //     productDescriptionErrors.innerText = 'El artículo debe tener descripción'
    //     errores.push('El artículo debe tener descripción');
    //     description.classList.add('is-invalid');
    // } else {
    //     productDescriptionErrors.innerText = ''
    //     description.classList.add('is-valid');
    //     description.classList.remove('is-invalid');
    // }


// validaciones productImg
    let acceptedFiles  = /(.jpg|.jpeg|.png|.gif)$/i;
    if(productImg.files[0] != undefined){
        image = productImg.files[0].name
    }

    let imageIsValid = acceptedFiles.test(image)


    if (!imageIsValid || !image == undefined) {
        productImageErrors.innerText = 'Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif'
        errores.push('Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif');
        productImg.classList.add('is-invalid');
    } else {
        productImageErrors.innerText = ''
        productImg.classList.add('is-valid');
        productImg.classList.remove('is-invalid');
    }

    ;


        if (errores.length > 0) {
                
            console.log('Hay errores en el formulario: ' + errores);
                
        } else {
            formulario.submit();
        }

    })

})