import { useState, useEffect, useCallback, memo } from 'react';

interface ImageCarouselProps {
  images: string[];
  projectId?: string;
  projectLocation?: string;
}

function ImageCarousel({ images, projectId = '', projectLocation = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // Variables para controlar cuántas imágenes mostrar
  const imagesPerView = 3;
  const totalSlides = Math.ceil(images.length / imagesPerView);

  // Función para navegar a la siguiente diapositiva (memoizada)
  const nextSlide = useCallback(() => {
    if (currentIndex < images.length - imagesPerView) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // Volver al inicio cuando llegas al final
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length, imagesPerView]);

  // Función para navegar a la diapositiva anterior (memoizada)
  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    } else {
      // Ir al final cuando estás en el inicio
      setCurrentIndex(Math.max(0, images.length - imagesPerView));
    }
  }, [currentIndex, images.length, imagesPerView]);

  // Función para abrir el modal con la imagen seleccionada (memoizada)
  const openModal = useCallback((imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setModalImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }, []);

  // Función para cerrar el modal (memoizada)
  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Restaurar scroll del body
  }, []);

  // Función para navegar a la siguiente imagen en el modal (memoizada)
  const nextModalImage = useCallback(() => {
    if (modalImageIndex < images.length - 1) {
      const nextIndex = modalImageIndex + 1;
      setModalImageIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    }
  }, [modalImageIndex, images]);

  // Función para navegar a la imagen anterior en el modal (memoizada)
  const prevModalImage = useCallback(() => {
    if (modalImageIndex > 0) {
      const prevIndex = modalImageIndex - 1;
      setModalImageIndex(prevIndex);
      setSelectedImage(images[prevIndex]);
    }
  }, [modalImageIndex, images]);

  // Función para manejar el inicio del deslizamiento táctil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Función para manejar el movimiento del deslizamiento táctil
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Función para manejar el final del deslizamiento táctil
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Deslizar a la izquierda: siguiente diapositiva
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Deslizar a la derecha: diapositiva anterior
      prevSlide();
    }
  };

  // Auto-reproducción del carrusel (solo cuando el modal está cerrado)
  useEffect(() => {
    if (!modalOpen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Cambiar cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [nextSlide, modalOpen]);

  // Calcular el índice para los indicadores
  const indicatorIndex = Math.floor(currentIndex / imagesPerView);

  return (
    <div className="relative w-full mb-8 max-w-[100vw]">
      {/* Contenedor principal del carrusel */}
      <div 
        className="relative overflow-hidden w-full" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Se han eliminado los botones de navegación (flechas) para permitir solo navegación táctil/mouse */}
        
        {/* Contenedor de las imágenes */}
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[33.333%] px-1 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <img 
                src={`https://storage.googleapis.com/hauspanama/Proyectos/${projectLocation}/${projectId.charAt(0).toUpperCase() + projectId.slice(1)}/${image}`} 
                alt={`Imagen ${index + 1}`} 
                className="w-full aspect-square object-cover rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores de diapositiva */}
      <div className="flex justify-center mt-4 gap-1.5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * imagesPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === indicatorIndex ? 'bg-[var(--secondary)]' : 'bg-gray-300'
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* Modal para ver la imagen en grande */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white/20 rounded-full p-2 z-10"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full">
              <img 
                src={`https://storage.googleapis.com/hauspanama/Proyectos/${projectLocation}/${projectId.charAt(0).toUpperCase() + projectId.slice(1)}/${selectedImage}`} 
                alt="Imagen ampliada" 
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Controles de navegación del modal */}
            <div className="flex justify-center items-center space-x-6 mt-4 w-full">
              {/* Botón anterior */}
              <button 
                onClick={prevModalImage}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Indicador de posición */}
              <span className="text-white text-sm">
                {modalImageIndex + 1} / {images.length}
              </span>
              
              {/* Botón siguiente */}
              <button 
                onClick={nextModalImage}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Exportar componente con memoización para evitar renderizados innecesarios
export default memo(ImageCarousel);
