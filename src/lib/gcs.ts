/**
 * Utilidad para manejar URLs y operaciones de Google Cloud Storage (GCS)
 */
import { Storage } from '@google-cloud/storage';
import type { StorageOptions } from '@google-cloud/storage';

// Nombre del bucket de Google Cloud Storage
const bucketName: string = 'hauspanama';

// Configuración para Google Cloud Storage
let storage: Storage | null = null;

try {
  const isProd: boolean = import.meta.env.PROD;
  const projectId: string = import.meta.env.GCS_PROJECT_ID || '';
  let storageOptions: StorageOptions = { projectId };
  
  // Configurar autenticación basada en el entorno
  if (import.meta.env.GCS_CREDENTIALS) {
    // Usar credenciales desde variable de entorno si están disponibles
    storageOptions.credentials = JSON.parse(import.meta.env.GCS_CREDENTIALS.toString());
  } else if (!isProd) {
    // En desarrollo local, usar archivo de credenciales
    storageOptions.keyFilename = import.meta.env.GCS_KEY_FILE || './gcs-key.json';
  }
  
  // Inicializar cliente de Storage
  storage = new Storage(storageOptions);
} catch (error) {
  console.error('Error al inicializar Google Cloud Storage:', error);
}

/**
 * Estructura de carpetas en Google Cloud Storage
 */
type FolderType = 'Logos' | 'Backgrounds' | 'Mapas' | 'Videos' | 'Brochures' | 'Plantas' | 'Portadas' | 'Proyectos';

/**
 * Opciones para las transformaciones de imágenes en GCS
 */
interface GcsOptions {
  width?: number;
  height?: number;
  format?: string;
  quality?: number;
}

/**
 * Genera una URL de Google Cloud Storage a partir de un ID público
 * @param publicId - ID o ruta de la imagen en GCS (ej: "Logos/logo_haus")
 * @param options - Opciones adicionales (para futuras implementaciones)
 * @returns URL de Google Cloud Storage
 */
export function getGcsUrl(publicId: string, options: GcsOptions = {}): string {
  // Si es una URL completa, devolverla directamente
  if (publicId.startsWith('http')) {
    return publicId;
  }
  
  // La URL base para archivos públicamente accesibles en GCS
  const baseUrl: string = `https://storage.googleapis.com/${bucketName}`;

  // Construir la URL final
  const finalUrl = `${baseUrl}/${publicId}`;
  
  // Log para depuración
  console.log(`GCS URL generada para ${publicId}: ${finalUrl}`);
  
  return finalUrl;
}

/**
 * Determina si una URL es de Google Cloud Storage
 * @param url - URL a verificar
 * @returns True si es una URL de GCS
 */
export function isGcsUrl(url: string): boolean {
  return url.includes('storage.cloud.google.com') || url.includes('storage.googleapis.com');
}

/**
 * Lista todos los archivos en un directorio de GCS
 * Nota: Esta función es asíncrona y solo debe usarse en el servidor
 * @param directory - Directorio a listar (ej: "Logos")
 * @returns Promise con la lista de archivos
 */
export async function listFiles(directory: string): Promise<string[]> {
  if (!storage) {
    console.error('Google Cloud Storage no está inicializado');
    return [];
  }
  
  try {
    const [files] = await storage.bucket(bucketName).getFiles({
      prefix: directory
    });
    
    return files.map(file => file.name);
  } catch (error) {
    console.error('Error al listar archivos de GCS:', error);
    return [];
  }
}
