document.addEventListener('DOMContentLoaded', function() {
    const inputbox = document.getElementById('inputbox');
    const outputbox = document.getElementById('outputbox');

    inputbox.addEventListener('input', function() { 
        const message = inputbox.value.toUpperCase();
        console.log('message:', message);
        outputbox.textContent = `The message is: ${message}`;
    })
})