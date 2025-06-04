import { useState, useCallback, memo } from 'react';
import type { MapModalProps } from '../types/Component';

// Asegúrate de que la interfaz en Component.ts incluya estas propiedades

function MapModal({ mapImage, mapsUrl, projectName = 'Ubicación' }: MapModalProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal (memoizada)
  const openModal = useCallback(() => {
    setModalOpen(true);
    // Evitar scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }, []);

  // Función para abrir Google Maps en una nueva pestaña (memoizada)
  const openGoogleMaps = useCallback(() => {
    if (mapsUrl) {
      window.open(mapsUrl, '_blank');
    }
  }, [mapsUrl]);

  // Función para cerrar el modal (memoizada)
  const closeModal = useCallback(() => {
    setModalOpen(false);
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="relative w-full">
      {/* Imagen del mapa con cursor pointer para indicar que es clickeable */}
      <div 
        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={openModal}
      >
        <img 
          src={`https://storage.googleapis.com/hauspanama/Mapas/${mapImage}`} 
          alt="Mapa de ubicación" 
          className="w-full"
          draggable="false"
          style={{ userSelect: 'none' }}
        />
        {/* Overlay semi-transparente con ícono para indicar que es expandible */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/80 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal para ver el mapa en grande */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full bg-[var(--primary)] text-white py-3 px-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">{projectName} - Ubicación</h3>
              <button 
                onClick={closeModal}
                className="rounded-full p-2 hover:bg-white/20 transition-all"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="relative w-full p-4">
              <img 
                src={`https://storage.googleapis.com/hauspanama/Mapas/${mapImage}`} 
                alt={`Mapa de ubicación de ${projectName}`} 
                className="w-full h-full object-contain rounded-lg"
                draggable="false"
                style={{ userSelect: 'none' }}
              />
            </div>
            
            {mapsUrl && (
              <div className="w-full px-4 pb-4 flex justify-center">
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] hover:bg-[#ff7d00] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Exportar componente con memoización para evitar renderizados innecesarios
export default memo(MapModal);
