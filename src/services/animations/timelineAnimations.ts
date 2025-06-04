/**
 * Servicio para manejar las animaciones de la línea de tiempo
 * Controla las animaciones basadas en el scroll para la sección de historia/timeline
 */

/**
 * Inicializa las animaciones de la línea de tiempo basadas en Intersection Observer
 * Detecta cuando los elementos entran en el viewport y aplica la clase de activación
 */
export function initTimelineAnimations(): void {
 
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, {
    // Configuración: elemento visible al menos un 20%
    threshold: 0.2
  });
  
 
  document.querySelectorAll('.timeline-item').forEach((item: Element): void => {
    observer.observe(item);
  });
}
