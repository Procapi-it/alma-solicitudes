import { useState } from 'react';

interface BrochureDownloaderProps {
  brochureFile: string;
  projectName: string;
  buttonText: string;
  className?: string;
  projectLocation?: string;
  projectId?: string;
}

export default function BrochureDownloader({ brochureFile, projectName, buttonText, className = "", projectLocation, projectId }: BrochureDownloaderProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Función para descargar el PDF
  const downloadBrochure = () => {
    try {
      setIsLoading(true);
      console.log('Iniciando descarga del brochure:', brochureFile);
      
      // Construir la URL correcta usando Google Cloud Storage
      let finalUrl: string;
      const bucketName = 'hauspanama';
      const baseUrl = `https://storage.googleapis.com/${bucketName}`;
      
      if (brochureFile.startsWith('http')) {
        // Si ya es una URL completa, usarla directamente
        finalUrl = brochureFile;
      } else if (projectId && projectLocation) {
        // Usar la estructura correcta para los brochures: Plantas/CENTRO, Plantas/ESTE, Plantas/OESTE
        const locationUpper = projectLocation.toUpperCase();
        finalUrl = `${baseUrl}/Plantas/${locationUpper}/${brochureFile}`;
      } else {
        // Fallback a la carpeta general de brochures si no hay información del proyecto
        finalUrl = `${baseUrl}/Plantas/${brochureFile}`;
      }
      
      console.log('URL del brochure en GCS:', finalUrl);
      
      // Crear un nombre de archivo para la descarga
      const fileName = `${projectName.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`;
      
      // Crear un elemento <a> temporal con target="_blank" para evitar CORS
      const link = document.createElement('a');
      link.href = finalUrl;
      link.target = '_blank'; // Abrir en nueva pestaña evita restricciones CORS
      link.rel = 'noopener noreferrer';
      link.setAttribute('download', fileName); // El atributo download sugiere un nombre de archivo
      
      console.log('Iniciando descarga con nombre:', fileName);
      
      // Añadir al documento, ejecutar click y remover
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Solicitud de descarga enviada');
    } catch (error) {
      console.error('Error al iniciar la descarga:', error);
      alert('No se pudo iniciar la descarga del brochure. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      // Breve retraso antes de quitar el estado de carga
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <button
      onClick={downloadBrochure}
      disabled={isLoading}
      className={`${className} ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
      aria-busy={isLoading}
    >
      {isLoading ? 'Descargando...' : buttonText}
    </button>
  );
}
