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
        // Alertas modal
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
