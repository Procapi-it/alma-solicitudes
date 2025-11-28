// API client para enviar datos al CRM Tracker
const API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:4000/api/v1';

export const sendToCRMTracker = async (data) => {
  try {
    const response = await fetch(`${API_URL}/solicitudes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Branch and timing info
        sucursales: data.sucursales,
        meses: data.tiempodesocupar, // Mapear tiempodesocupar a meses
        motivo: data.razonprincipal, // Mapear razonprincipal a motivo
        
        // Nuevos campos de tracking
        tipoUso: data.tipoUso,
        tipoBienes: data.tipoBienes,
        procedenciaBienes: data.procedenciaBienes,
        
        // Person type
        persona: data.persona,
        
        // Persona Natural
        nombrenatural: data.nombrenatural,
        apellido: data.apellido,
        cedula: data.cedula,
        nacimiento: data.nacimiento,
        direccion: data.direccion,
        telefonoResidencial: data.telefonoResidencial,
        mobile: data.mobile,
        telefonoOficina: data.telefonoOficina,
        correo: data.correo,
        confirmeemail: data.confirmeemail,
        
        // Persona Jurídica
        compania: data.compania,
        ruc: data.ruc,
        dv: data.dv,
        representante: data.representante,
        cedularepresentante: data.cedularepresentante,
        percontacto: data.percontacto,
        cedulacontacto: data.cedulacontacto,
        telefonocontacto: data.telefonocontacto,
        telefonotrabajo: data.telefonotrabajo,
        telefonotrabajo2: data.telefonotrabajo2,
        mobilejuridico: data.mobilejuridico,
        correojuridico: data.correojuridico,
        confirmeemailjuridico: data.confirmeemailjuridico,
        
        // Authorized persons
        nombre1: data.nombre1,
        telefono1: data.telefono1,
        mobile1: data.mobile1,
        email1: data.email1,
        nombre2: data.nombre2,
        telefono2: data.telefono2,
        mobile2: data.mobile2,
        email2: data.email2,
        nombre3: data.nombre3,
        telefono3: data.telefono3,
        mobile3: data.mobile3,
        email3: data.email3,
        
        // Files
        file1: data.file1,
        file2: data.file2,
        emails: data.emails,
        
        // Judicial process
        nombredemandante: data.nombredemandante,
        direcciondemandante: data.direcciondemandante,
        telefonodemandante: data.telefonodemandante,
        proceso: data.judicial,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Datos enviados al CRM Tracker:', result);
    return result;
  } catch (error) {
    console.error('❌ Error al enviar datos al CRM Tracker:', error);
    // No lanzar error para no interrumpir el flujo del formulario
    // El email ya se envió, esto es un backup adicional
    return null;
  }
};
