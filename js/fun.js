// Selecciona el formulario del DOM
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores de los campos de texto
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Redirige según las credenciales ingresadas
    if (username === 'admin' && password === 'admin1q2w3e') {
        window.location.href = "admin_page.html"; // Redirige a la página del administrador
    } 
   
    else if (username === 'Cristian' && password === 'Peralta') {
        window.location.href = "CristianPeralta_page.html"; // Redirige a la página del empleado cristian peralta
    }
    
    else if (username === 'Matias' && password === 'Acevedo') {
        window.location.href = "MatiasAcevedo_page.html"; // Redirige a la página de
    } 
    
     else if (username === 'Grupo1' && password === '1442025') {
        window.location.href = "Grupo1.html"; // Redirige a la página de
    } 
    
    else if (username === 'Grupo2' && password === '2025414') {
        window.location.href = "Grupo2.html"; // Redirige a la página de
    }
    
    else if (username === 'Grupo3' && password === '4202514') {
        window.location.href = "Grupo3.html"; // Redirige a la página de
    }

    else if (username === '' && password === '') {
        window.location.href = "empleado_page.html"; // Redirige a la página de
    }

    else if (username === '' && password === '') {
        window.location.href = "empleado_page.html"; // Redirige a la página de
    }

    else {
        alert('Credenciales incorrectas. Intenta de nuevo.'); // Muestra una alerta en caso de error
    }
});



