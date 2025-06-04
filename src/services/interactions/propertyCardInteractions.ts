/**
 * Servicio para manejar las interacciones con las tarjetas de propiedades
 * Gestiona el comportamiento táctil y de navegación de las tarjetas en la página principal
 */

/**
 * Inicializa los manejadores de eventos para las tarjetas de propiedades
 * Implementa la detección de dispositivos táctiles y la navegación adecuada
 */
export function initPropertyCardInteractions(): void {
  // Detectar si es un dispositivo táctil
  const isTouchDevice: boolean = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  
  // Obtener todas las tarjetas de propiedades
  const propertyCards: NodeListOf<HTMLElement> = document.querySelectorAll('.property-card');
  
  // Variables para control de interacciones táctiles
  let isScrolling: boolean = false;
  let startY: number = 0;
  const scrollThreshold: number = 10; // Umbral para detectar scroll vs tap
  
  // Detectar scroll general en la página
  document.addEventListener('touchmove', (): void => {
    isScrolling = true;
  });
  
  // Reinicia el estado del scroll al terminar el toque
  document.addEventListener('touchend', (): void => {
    setTimeout((): void => { isScrolling = false; }, 100);
  });
  
  // Aplicar eventos a cada tarjeta
  propertyCards.forEach((card: HTMLElement): void => {
    // Guardar el enlace original
    const originalLink: string | null = card.getAttribute('href');
    
    // Solo para dispositivos táctiles
    if (isTouchDevice) {
      // Registrar inicio de toque
      card.addEventListener('touchstart', (e: TouchEvent): void => {
        startY = e.touches[0].clientY;
      });
      
      // Detectar cuando se completa el toque (tap)
      card.addEventListener('touchend', function(e: TouchEvent): void {
        // Si estamos scrolleando, no hacer nada
        if (isScrolling) return;
        
        // Comprobar si ha habido movimiento vertical significativo
        const endY: number = e.changedTouches[0].clientY;
        if (Math.abs(endY - startY) > scrollThreshold) return;
        
        // Es un tap en la tarjeta, aplicar animación
        this.classList.add('property-card-active');
        
        // Redireccionar después de la animación
        setTimeout((): void => {
          if (originalLink) {
            window.location.href = originalLink;
          }
        }, 800); // Reducido a 800ms para mejor experiencia
      });
    }
  });
}
