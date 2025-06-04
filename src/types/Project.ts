/**
 * Interfaz para la estructura de cada proyecto inmobiliario
 */
export interface Project {
  id: string;
  name: string;
  logo: string;
  logo2: string;
  propertyType: string;
  location: string;
  address: string;
  slogan: string;
  description: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  price: string;
  coverImage: string;
  heroVideo: string;
  brochureFile: string;
  videoFile: string;
  buttonText: string;
  pipedriveFormUrl: string;
  features: Feature[];
  gallery: string[];
  videoThumbnail: string;
  mapImage: string;
  mapsUrl: string;
}

/**
 * Interfaz para las características/amenidades de cada proyecto
 */
export interface Feature {
  icon: string;
  text: string;
}

/**
 * Interfaz para las tarjetas de propiedades en la página principal
 */
export interface PropertyCard {
  id: string;
  title: string;
  title2: string;
  subtitle: string;
  link: string;
  image: string;
}
