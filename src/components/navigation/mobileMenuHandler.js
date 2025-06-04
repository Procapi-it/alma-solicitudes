/**
 * Maneja la funcionalidad del menú móvil
 * Este script es utilizado por el componente MobileNav.astro
 */

export function initMobileMenu() {
  // Elementos del menú principal
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  // Elementos del dropdown principal de proyectos
  const projectsDropdownToggle = document.getElementById('projects-dropdown-toggle');
  const projectsDropdownContent = document.getElementById('projects-dropdown-content');
  const dropdownIconDown = document.getElementById('dropdown-icon-down');
  const dropdownIconUp = document.getElementById('dropdown-icon-up');
  
  // Elementos de los subdropdowns por zona
  const centroDropdownToggle = document.getElementById('centro-dropdown-toggle');
  const centroDropdownContent = document.getElementById('centro-dropdown-content');
  const esteDropdownToggle = document.getElementById('este-dropdown-toggle');
  const esteDropdownContent = document.getElementById('este-dropdown-content');
  const oesteDropdownToggle = document.getElementById('oeste-dropdown-toggle');
  const oesteDropdownContent = document.getElementById('oeste-dropdown-content');

  if (!mobileMenuButton || !mobileMenu) return;
  
  // Toggle para el menú móvil principal
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('flex') && !mobileMenu.classList.contains('hidden');
    
    if (!isOpen) {
      // Abrir menú
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden'; // Prevenir scroll
      
      // Actualizar atributos ARIA para accesibilidad
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      mobileMenuButton.setAttribute('aria-label', 'Cerrar menú de navegación');
      
      // Mostrar animación
      requestAnimationFrame(() => {
        mobileMenu.classList.remove('opacity-0', '-translate-y-4');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      });
      
      // Manejar escape key para cerrar el menú (mejora de accesibilidad)
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      // Cerrar menú
      closeMenu();
    }
  });
  
  // Función para cerrar el menú (reutilizable)
  function closeMenu() {
    mobileMenu.classList.add('opacity-0', '-translate-y-4');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    
    // Actualizar atributos ARIA
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    
    // Esperar a que termine la transición antes de ocultar
    setTimeout(() => {
      mobileMenu.classList.remove('flex');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = ''; // Restaurar scroll
      
      // Restablecer todos los dropdowns si están abiertos
      if (projectsDropdownContent && projectsDropdownContent.classList.contains('block')) {
        projectsDropdownContent.classList.remove('block');
        projectsDropdownContent.classList.add('hidden');
        if (dropdownIconDown && dropdownIconUp) {
          dropdownIconDown.classList.remove('hidden');
          dropdownIconUp.classList.add('hidden');
        }
        // Actualizar atributos ARIA del dropdown
        if (projectsDropdownToggle) {
          projectsDropdownToggle.setAttribute('aria-expanded', 'false');
        }
      }
      
      // Restablecer los subdropdowns de zonas
      const allZoneDropdowns = [centroDropdownContent, esteDropdownContent, oesteDropdownContent];
      allZoneDropdowns.forEach(dropdown => {
        if (dropdown && dropdown.classList.contains('block')) {
          dropdown.classList.remove('block');
          dropdown.classList.add('hidden');
        }
      });
      
      // Actualizar los íconos y atributos ARIA de todos los toggles de zona
      const allZoneToggles = [centroDropdownToggle, esteDropdownToggle, oesteDropdownToggle];
      allZoneToggles.forEach(toggle => {
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          // Resetear íconos
          const downIcon = toggle.querySelector('.centro-dropdown-icon-down, .este-dropdown-icon-down, .oeste-dropdown-icon-down');
          const upIcon = toggle.querySelector('.centro-dropdown-icon-up, .este-dropdown-icon-up, .oeste-dropdown-icon-up');
          if (downIcon && upIcon) {
            downIcon.classList.remove('hidden');
            upIcon.classList.add('hidden');
          }
        }
      });
    }, 300);
    
    // Eliminar event listener de escape
    document.removeEventListener('keydown', handleEscapeKey);
  }
  
  // Manejador para la tecla Escape
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  }

  // Toggle para el dropdown de proyectos principal
  if (projectsDropdownToggle && projectsDropdownContent) {
    projectsDropdownToggle.addEventListener('click', () => {
      const isOpen = projectsDropdownContent.classList.contains('block');
      
      if (!isOpen) {
        // Abrir dropdown
        projectsDropdownContent.classList.remove('hidden');
        projectsDropdownContent.classList.add('block');
        
        // Cambiar iconos
        if (dropdownIconDown && dropdownIconUp) {
          dropdownIconDown.classList.add('hidden');
          dropdownIconUp.classList.remove('hidden');
        }
        
        // Actualizar atributo ARIA
        projectsDropdownToggle.setAttribute('aria-expanded', 'true');
      } else {
        // Cerrar dropdown
        projectsDropdownContent.classList.remove('block');
        projectsDropdownContent.classList.add('hidden');
        
        // Cambiar iconos de vuelta
        if (dropdownIconDown && dropdownIconUp) {
          dropdownIconDown.classList.remove('hidden');
          dropdownIconUp.classList.add('hidden');
        }
        
        // Actualizar atributo ARIA
        projectsDropdownToggle.setAttribute('aria-expanded', 'false');
        
        // Cerrar también todos los subdropdowns si están abiertos
        const allZoneDropdowns = [centroDropdownContent, esteDropdownContent, oesteDropdownContent];
        allZoneDropdowns.forEach(dropdown => {
          if (dropdown && dropdown.classList.contains('block')) {
            dropdown.classList.remove('block');
            dropdown.classList.add('hidden');
          }
        });
        
        // Resetear íconos y ARIA en todos los subdropdowns
        const allZoneToggles = [centroDropdownToggle, esteDropdownToggle, oesteDropdownToggle];
        allZoneToggles.forEach(toggle => {
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            const downIcon = toggle.querySelector('.centro-dropdown-icon-down, .este-dropdown-icon-down, .oeste-dropdown-icon-down');
            const upIcon = toggle.querySelector('.centro-dropdown-icon-up, .este-dropdown-icon-up, .oeste-dropdown-icon-up');
            if (downIcon && upIcon) {
              downIcon.classList.remove('hidden');
              upIcon.classList.add('hidden');
            }
          }
        });
      }
    });
  }
  
  // Función para configurar los toggles de los subdropdowns por zona
  function setupZoneDropdown(toggleElement, contentElement, downIconClass, upIconClass) {
    if (!toggleElement || !contentElement) return;
    
    toggleElement.addEventListener('click', (e) => {
      // Evitar que se propague al dropdown principal
      e.stopPropagation();
      
      const isOpen = contentElement.classList.contains('block');
      const downIcon = toggleElement.querySelector('.' + downIconClass);
      const upIcon = toggleElement.querySelector('.' + upIconClass);
      
      if (!isOpen) {
        // Abrir subdropdown
        contentElement.classList.remove('hidden');
        contentElement.classList.add('block');
        
        // Cambiar iconos
        if (downIcon && upIcon) {
          downIcon.classList.add('hidden');
          upIcon.classList.remove('hidden');
        }
        
        // Actualizar atributo ARIA
        toggleElement.setAttribute('aria-expanded', 'true');
      } else {
        // Cerrar subdropdown
        contentElement.classList.remove('block');
        contentElement.classList.add('hidden');
        
        // Cambiar iconos de vuelta
        if (downIcon && upIcon) {
          downIcon.classList.remove('hidden');
          upIcon.classList.add('hidden');
        }
        
        // Actualizar atributo ARIA
        toggleElement.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Configurar cada subdropdown de zona
  setupZoneDropdown(centroDropdownToggle, centroDropdownContent, 'centro-dropdown-icon-down', 'centro-dropdown-icon-up');
  setupZoneDropdown(esteDropdownToggle, esteDropdownContent, 'este-dropdown-icon-down', 'este-dropdown-icon-up');
  setupZoneDropdown(oesteDropdownToggle, oesteDropdownContent, 'oeste-dropdown-icon-down', 'oeste-dropdown-icon-up');
  
  // Mejorar la navegación por teclado en el dropdown principal
  if (projectsDropdownContent) {
    const dropdownItems = projectsDropdownContent.querySelectorAll('a[role="menuitem"]');
    dropdownItems.forEach((item, index) => {
      item.addEventListener('keydown', (e) => {
        // Navegar hacia abajo con flecha abajo
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextItem = dropdownItems[index + 1] || dropdownItems[0];
          nextItem.focus();
        }
        
        // Navegar hacia arriba con flecha arriba
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevItem = dropdownItems[index - 1] || dropdownItems[dropdownItems.length - 1];
          prevItem.focus();
        }
        
        // Cerrar dropdown con Escape
        if (e.key === 'Escape') {
          projectsDropdownToggle.click();
          projectsDropdownToggle.focus();
        }
      });
    });
  }
}
