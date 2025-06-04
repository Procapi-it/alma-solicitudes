
/**
 * Mejora la accesibilidad de la navegación por teclado
 * Añade soporte para navegación con teclado en elementos interactivos personalizados
 */
export function enhanceKeyboardNavigation(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const customButtons = document.querySelectorAll('[role="button"]:not(button)');
    customButtons.forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      
      if (!button.hasAttribute('tabindex')) {
        button.setAttribute('tabindex', '0');
      }
      
      button.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
    
    // Mejorar la experiencia con el menú desplegable
    const dropdownToggles = document.querySelectorAll('[aria-haspopup="true"]');
    dropdownToggles.forEach((toggle) => {
      if (!(toggle instanceof HTMLElement)) return;
      
      toggle.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          
          const controlsId = toggle.getAttribute('aria-controls');
          if (!controlsId) return;
          
          const controlledElement = document.getElementById(controlsId);
          if (!controlledElement) return;
          
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', (!isExpanded).toString());
          
          if (!isExpanded) {
            controlledElement.classList.remove('hidden');
            
            // Enfocar el primer elemento del menú
            const firstFocusable = controlledElement.querySelector('a, button, [tabindex="0"]');
            if (firstFocusable instanceof HTMLElement) {
              firstFocusable.focus();
            }
          } else {
            controlledElement.classList.add('hidden');
          }
        }
      });
    });
  });
}

/**
 * Mejora los contrastes de color para una mejor accesibilidad visual
 * Añade clases para mejorar el contraste en ciertos elementos cuando sea necesario
 */
export function enhanceColorContrast(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const smallTexts = document.querySelectorAll('.text-sm, .text-xs');
    smallTexts.forEach((text) => {
      if (text.closest('.bg-white, .bg-gray-100')) {
        text.classList.add('text-gray-800');
      }
    });
  });
}

/**
 * Añade funcionalidad de skip-to-content para usuarios de teclado
 * Permite a los usuarios de teclado saltar directamente al contenido principal
 */
export function addSkipToContentLink(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Saltar al contenido principal';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  });
}

/**
 * Inicializa todas las mejoras de accesibilidad
 * Función principal para activar todas las mejoras de accesibilidad en la aplicación
 */
export function initAccessibilityEnhancements(): void {
  enhanceKeyboardNavigation();
  enhanceColorContrast();
  addSkipToContentLink();
}
