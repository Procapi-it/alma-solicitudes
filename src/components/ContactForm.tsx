// This is a placeholder component for the Pipedrive form
// The actual form will be imported from Pipedrive script
interface ContactFormProps {
  projectId: string;
  formUrl?: string;
}

export default function ContactForm({ projectId, formUrl }: ContactFormProps) {
    return (
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-[#EE7A23] text-xl font-bold mb-4 text-center">¿Interesado en la información del proyecto?</h3>
        <p className="text-center text-sm mb-6">Déjanos tus datos y un asesor se pondrá en contacto contigo</p>
  
        {/* Placeholder for Pipedrive form */}
        <div id={`pipedrive-form-${projectId}`} className="pipedrive-form-container">
          {/* The actual Pipedrive form will be injected here via script */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE7A23]"
                placeholder="Tu nombre"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE7A23]"
                placeholder="tu@email.com"
              />
            </div>
  
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE7A23]"
                placeholder="+507 6123 4567"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE7A23]"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#EE7A23] text-white font-medium rounded-md hover:bg-[#d86a18] transition-colors"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    )
  }
  