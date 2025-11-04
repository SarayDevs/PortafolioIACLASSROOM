// ============================================
// FUNCIONALIDADES DEL PORTAFOLIO
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENÚ HAMBURGUESA PARA MÓVIL
    // ============================================
    
    // Obtener elementos del menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Si el menú hamburguesa existe, agregar funcionalidad
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Alternar clase 'active' en el menú para mostrar/ocultar
            navMenu.classList.toggle('active');
            
            // Animación del botón hamburguesa
            hamburger.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ============================================
    // FORMULARIO DE CONTACTO
    // ============================================
    
    // Obtener el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');
    
    // Agregar evento cuando se envíe el formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Prevenir que el formulario se envíe normalmente (recarga de página)
            e.preventDefault();
            
            // Obtener los valores de los campos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validar que todos los campos estén llenos
            if (name && email && message) {
                // Mostrar mensaje en la consola del navegador
                console.log('Formulario enviado correctamente');
                console.log('Datos del formulario:');
                console.log('Nombre:', name);
                console.log('Correo:', email);
                console.log('Mensaje:', message);
                
                // Mostrar alerta al usuario (opcional)
                alert('¡Mensaje enviado correctamente! Revisa la consola del navegador para ver los datos.');
                
                // Limpiar el formulario después de enviarlo
                contactForm.reset();
            } else {
                // Si faltan campos, mostrar mensaje de error
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
    
    // ============================================
    // EFECTO DE SCROLL SUAVE EN NAVEGACIÓN
    // ============================================
    
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Agregar evento a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Obtener el destino del enlace (ej: #inicio, #experiencia)
            const href = this.getAttribute('href');
            
            // Solo procesar si es un enlace interno (que empiece con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Buscar el elemento destino
                const targetElement = document.querySelector(href);
                
                // Si el elemento existe, hacer scroll suave hasta él
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ============================================
    // EFECTO DE APARICIÓN AL HACER SCROLL
    // ============================================
    
    // Función para verificar si un elemento está visible en la pantalla
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Agregar clase para animación cuando los elementos sean visibles
    function checkVisibility() {
        const cards = document.querySelectorAll('.experience-card, .project-card, .skill-category');
        
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Establecer estados iniciales para animación
    const cards = document.querySelectorAll('.experience-card, .project-card, .skill-category');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Escuchar el evento de scroll para activar la animación
    window.addEventListener('scroll', checkVisibility);
    // Ejecutar una vez al cargar para elementos ya visibles
    checkVisibility();
    
    // ============================================
    // PREVENIR COMPORTAMIENTO POR DEFECTO EN BOTONES "VER MÁS"
    // ============================================
    
    // Obtener todos los botones "Ver más"
    const viewButtons = document.querySelectorAll('.btn-view');
    
    // Agregar evento a cada botón
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevenir cualquier acción por defecto
            e.preventDefault();
            
            // Aquí puedes agregar funcionalidad futura, como abrir un modal
            // Por ahora, solo mostramos un mensaje en consola
            console.log('Botón "Ver más" clickeado - Funcionalidad por implementar');
        });
    });
    
});


