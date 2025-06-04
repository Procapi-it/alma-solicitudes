/**
 * Cliente de Google Cloud Storage para componentes React
 */

/**
 * Obtiene la URL de una imagen almacenada en Google Cloud Storage
 * @param publicId - ID o ruta de la imagen en GCS
 * @returns URL completa de la imagen en GCS
 */
export function getGcsImageUrl(publicId: string): string {
  // Si ya es una URL, devolverla directamente
  if (publicId.startsWith('http')) {
    return publicId;
  }
  
  const bucketName = 'hauspanama'; // Nombre del bucket según la imagen compartida
  return `https://storage.googleapis.com/${bucketName}/${publicId}`;
}
