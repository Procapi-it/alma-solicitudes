import emailjs from "@emailjs/browser";

export const sendCustomEmail = (data, judicial)  => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    const emailList = data.emails.split(",").map((email) => email.trim())
    emailList.forEach((email) => {
        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                sucursales: data.sucursales,
                meses: data.meses,
                fechaocupacion: data.fechaocupacion,
                motivo: data.motivo,
                persona: data.persona,
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
                checkbox: [
                    data.checkbox1 && "Herramientas",
                    data.checkbox2 && "Desalojo",
                    data.checkbox3 && "Materiales",
                    data.checkbox4 && "Carros",
                    data.checkbox5 && "Documentos / Archivos",
                    data.checkbox6 && "Mobiliario y Equipos",
                    data.checkbox7 && "Artículos de Hogar",
                    data.checkbox8 && "Repuestos",
                    data.checkbox9 && "Mercancía",
                    data.checkbox10 && "Muebles del Hogar",
                    data.checkbox11 && "Otros",
                ].filter(Boolean).join(", "),
                nombredemandante: data.nombredemandante,
                direcciondemandante: data.direcciondemandante,
                telefonodemandante: data.telefonodemandante,
                file1: data.file1,
                file2: data.file2,
                emails: email,
                proceso: judicial,
            } 
            
        )
        .then(response => {
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(err => {
            console.log("FAILED...", err);
        });
    });
};