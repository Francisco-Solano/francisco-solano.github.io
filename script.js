// Seleccionar todas las tarjetas del proyecto
let projectCards = document.querySelectorAll('.project-card');
let images = document.querySelectorAll('.certificado')

// Añadir eventos a cada tarjeta
projectCards.forEach(card => {
    // Evento al pasar el ratón (hover)
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Aumentar tamaño
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Añadir sombra
    });

    // Evento al quitar el ratón (dejar hover)
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Volver al tamaño original
        card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'; // Sombra original
    });
});

images.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Aumentar tamaño
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Añadir sombra
    })

    // Evento al quitar el ratón (dejar hover)
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Volver al tamaño original
        card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'; // Sombra original
    });
})

