document.addEventListener('DOMContentLoaded', function() { 
    // obtener la referencia de los documentos de la pagina //
    const inputbox = document.getElementById('inputbox');
    const showbtn = document.getElementById('showbtn');
    const outputbox = document.getElementById('outputbox');

    // añadir un observador al botón //
    showbtn.addEventListener('click', function() {
        const message = inputbox.value;
        console.log('mensaje:', message) 
        outputbox.textContent = message
    }) 
})