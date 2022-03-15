//Enviar correos electronicos
const $form = document.getElementById('form')

$form.addEventListener('submit' , handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        Swal.fire({
            title: 'Gracias!',
	        text: 'Me estare contactando contigo muy pronto!',
	        icon: 'success',
	        confirmButtonText: 'Ok',
            confirmButtonColor: '#b9181b' , 
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true
        })
    }
}

//Validacion del correo electronico
// const inputs = document.querySelectorAll('#form input'); 
// const expresiones = {

// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     telefono: /^[+]\d{2,3}\s\d{7,14}$/, // +Numeros 7 a 14 numeros.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     proyecto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
// }

// const validarFormulario = (e) => {
//    switch (e.target.name) {
//        case "nombre":
//             if(expresiones.nombre.test(e.target.value)){
//                 document.getElementById('grupo-nombre').classList.remove('invalid-feedback');
//                 document.getElementById('grupo-nombre').classList.add('valid-feedback');
//             }else{
//                 document.getElementById('grupo-nombre').classList.add('invalid-feedback');
//             }
//        break;
//        case "telefono":
       
//        break;
//        case "email":
       
//        break;
//        case "proyecto":
       
//        break;
//        case "mensaje":
       
//        break;
//    }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup' , validarFormulario);
//     input.addEventListener('blur' , validarFormulario);
// });

// $form.addEventListener('submit', (e) => {
//     e.preventDefault
// })