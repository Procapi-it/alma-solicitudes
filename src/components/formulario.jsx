
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendCustomEmail } from "../global/email";
import { BotonUpload } from "./botonupload";
import { uploadAndConvertFile } from "../global/config";
import { Completed } from "./completed";


export const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [persona, setPersona] = useState("natural");
    const [judicial, setJudicial] = useState("no");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleFileChange1 = async event => {
        const file = event.target.files[0];
        const text = await uploadAndConvertFile(file);
        register("file1", { value: text });
    };

    const handleFileChange2 = async event => {
        const file = event.target.files[0];
        const text = await uploadAndConvertFile(file);
        register("file2", { value: text });
    };

    const handleSelectChange = event => {
        const selectedSucursal = event.target.value;
        const sucursalEmails = {
            "VistaHermosa": ["vistahermosa@almacenajes.net", "ventas.vistahermosa@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "CostadelEste": ["costadeleste@almacenajes.net", "ventas.costadeleste@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "RioAbajo": ["rioabajo@almacenajes.net, ventas.rioabajo@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "Albrook": ["albrook@almacenajes.net", "ventas.albrook@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "SanAntonio": ["sanantonio@almacenajes.net", "ventas.sanantonio@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "Colon": ["colon@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "Milla8": ["milla8@almacenajes.net", "ventas.milla8@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "Gorgona": ["gorgona@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "David": ["david@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
            "HatoMontana": ["hatomontana@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"]
        };
        const emails = sucursalEmails[selectedSucursal] || [];
        const emailsText = emails.join(", ");
        register("emails", { value: emailsText });
    };

    const handleCheckboxChange = event => {
        const selectedCheckbox = event.target.value;
        register("queGuardar", { value: selectedCheckbox });
    };



    const onSubmit = data => {
        sendCustomEmail(data, judicial);
        setIsSubmitted(true);
    };

    return (
        <>
            {isSubmitted === true ? <Completed /> :
                <section className="flex flex-col items-center justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="border mt-5 mx-auto ">
                        <h2 className="text-md font-bold mb-4 text-start mt-5">
                            Los campos con (*) son obligatorios
                        </h2>

                        <section>
                            <div className="mb-4">
                                <label htmlFor="sucursales" className="block mb-2">
                                    Sucursal<span className="text-red-500">*</span>:
                                </label>
                                <select
                                    id="sucursales"
                                    {...register(
                                        "sucursales",
                                        { required: true }
                                    )}
                                    onChange={handleSelectChange}
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full">
                                    <option value="">Seleccione:</option>
                                    <option value="VistaHermosa">
                                        Vista Hermosa
                                    </option>
                                    <option value="CostadelEste">
                                        Costa del Este
                                    </option>
                                    <option value="RioAbajo">Rio Abajo</option>
                                    <option value="Albrook">Albrook</option>
                                    <option value="SanAntonio">San Antonio</option>
                                    <option value="Colon">Colón</option>
                                    <option value="Milla8">Milla 8</option>
                                    <option value="Gorgona">Gorgona</option>
                                    <option value="David">David</option>
                                    <option value="HatoMontana">
                                        Hato Montaña
                                    </option>
                                </select>
                            </div>

                            <div className="mb-4 mx-auto">
                                <label htmlFor="meses" className="block mb-2">
                                    Cuánto tiempo planea utilizar el local?
                                    <span className="text-red-500">*</span>:
                                </label>
                                <select
                                    id="meses"
                                    {...register("meses", { required: true })}
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full">
                                    <option value="">Seleccione:</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <label
                                    htmlFor="textomeses"
                                    className="text-sm text-gray-600">
                                    Meses
                                </label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="mb-4">
                                    <label
                                        htmlFor="fechaocupacion"
                                        className="block mb-2">
                                        Que fecha planea ocupar el local?
                                        <span className="text-red-500">*</span>:
                                    </label>
                                    <input
                                        type="date"
                                        id="fechaocupacion"
                                        {...register("fechaocupacion")}
                                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="motivo" className="block mb-2">
                                        Motivo de uso del local?
                                        <span className="text-red-500">*</span>:
                                    </label>
                                    <select
                                        id="motivo"
                                        {...register("motivo")}
                                        className="border border-gray-300 px-4 py-2 rounded-md w-full">
                                        <option value="">Seleccione:</option>
                                        <option value="Viaje">Viaje</option>
                                        <option value="Reducción de gastos">
                                            Reducción de Gastos
                                        </option>
                                        <option value="Alquilo su vivienda">
                                            Alquilo su vivienda
                                        </option>
                                        <option value="mLibera espacio de vivienda actual">
                                            Libera espacio en vivienda actual
                                        </option>
                                        <option value="Falta de espacio en negocio">
                                            Falta de espacio en negocio
                                        </option>
                                        <option value="mEspera entrega de casa">
                                            Espera entrega de casa
                                        </option>
                                        <option value="No tiene espacio propio">
                                            No tiene espacio propio
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div>
                                <h2 className="font-bold mb-2">
                                    Es usted persona natural o jurídica?
                                </h2>
                                <div className="flex gap-5">
                                    <div>
                                        <input
                                            type="radio"
                                            id="personaNatural"
                                            name="persona"
                                            value="natural"
                                            onChange={() => setPersona("natural")}
                                            defaultChecked
                                        />
                                        <label
                                            htmlFor="personaNatural"
                                            className="mx-1">
                                            Persona Natural
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="personaJuridica"
                                            name="persona"
                                            value="juridica"
                                            onChange={() => setPersona("juridica")}
                                        />
                                        <label
                                            htmlFor="personaJuridica"
                                            className="mx-1">
                                            Persona Jurídica
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {persona === "natural" ? (
                                <div className="md:col-span-3 lg:grid lg:grid-cols-3 gap-2 mt-2">
                                    <div>
                                        <label
                                            htmlFor="nombrenatural"
                                            className="block mb-2">
                                            Nombre
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="nombrenatural"
                                            {...register("nombrenatural", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="apellido"
                                            className="block mb-2">
                                            Apellidos
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="apellido"
                                            {...register("apellido", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="cedula"
                                            className="block mb-2">
                                            Cédula o Pasaporte
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="cedula"
                                            {...register("cedula", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="nacimiento"
                                            className="block mb-2">
                                            Fecha de nacimiento
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="date"
                                            id="nacimiento"
                                            {...register("nacimiento", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="direccion"
                                            className="block mb-2">
                                            Dirección
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="text"
                                            {...register("direccion", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefonoResidencial"
                                            className="block mb-2">
                                            Teléfono Residencial
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="number"
                                            id="telefonoResidencial"
                                            {...register("telefonoResidencial", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mobile"
                                            className="block mb-2">
                                            Mobile
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="number"
                                            id="mobile"
                                            {...register("mobile", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefonoOficina"
                                            className="block mb-2">
                                            Teléfono Oficina
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="number"
                                            id="telefonoOficina"
                                            {...register("telefonoOficina", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="correo"
                                            className="block mb-2">
                                            E-Mail
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="email"
                                            id="correo"
                                            {...register("correo", {
                                                required: true,
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.correo
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.correo && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="confirmeemail"
                                            className="block mb-2">
                                            Confirme su E-Mail
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="email"
                                            id="confirmeemail"
                                            {...register("confirmeemail", {
                                                required: true,
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.confirmeemail
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.confirmeemail && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="md:col-span-3 lg:grid lg:grid-cols-3 gap-2 mt-2">
                                    <div>
                                        <label
                                            htmlFor="compania"
                                            className="block mb-2">
                                            Nombre de la compañia
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="compania"
                                            {...register("compania", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="ruc" className="block mb-2">
                                            R.U.C
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="ruc"
                                            {...register("ruc", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dv" className="block mb-2">
                                            D.V
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="dv"
                                            {...register("dv", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="representante"
                                            className="block mb-2">
                                            Nombre del Representante Legal
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="representante"
                                            {...register("representante", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="cedularepresentante"
                                            className="block mb-2">
                                            Cédula o Pasaporte
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="cedularepresentante"
                                            {...register("cedularepresentante", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="percontacto"
                                            className="block mb-2">
                                            Nombre de la persona de contacto
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="percontacto"
                                            {...register("percontacto", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="cedulacontacto"
                                            className="block mb-2">
                                            Cédula o Pasaporte
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="number"
                                            id="cedulacontacto"
                                            {...register("cedulacontacto", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="span-col-3">
                                        <label
                                            htmlFor="telefonocontacto"
                                            className="block mb-2">
                                            Teléfono Oficina
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefonocontacto"
                                            {...register("telefonocontacto", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefonotrabajo"
                                            className="block mb-2">
                                            Teléfono Trabajo
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefonotrabajo"
                                            {...register("telefonotrabajo", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefonotrabajo2"
                                            className="block mb-2">
                                            Teléfono Oficina 2
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefonotrabajo2"
                                            {...register("telefonotrabajo2", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mobilejuridico"
                                            className="block mb-2">
                                            Mobile:
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="mobilejuridico"
                                            {...register("mobilejuridico", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="correojuridico"
                                            className="block mb-2">
                                            E-Mail
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="email"
                                            id="correojuridico"
                                            {...register("correojuridico", {
                                                required: true,
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.correojuridico
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.correojuridico && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="confirmeemailjuridico"
                                            className="block mb-2">
                                            Confirme su E-Mail
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="email"
                                            id="confirmeemailjuridico"
                                            {...register("confirmeemailjuridico", {
                                                required: true,
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.confirmeemailjuridico
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.confirmeemailjuridico && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                            <hr className="my-5" />
                            <section>
                                <h2 className="text-bold mb-5">
                                    PERSONAS AUTORIZADAS POR EL ARRENDATARIO PARA
                                    INGRESAR AL DEPÓSITO
                                </h2>

                                <div className="grid grid-rows-2 md:grid-cols-4 gap-2 mt-2">
                                    <div>
                                        <label
                                            htmlFor="nombre1"
                                            className="block mb-2">
                                            Nombre
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre1"
                                            {...register("nombre1", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefono1"
                                            className="block mb-2">
                                            Teléfono
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefono1"
                                            {...register("telefono1", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mobile1"
                                            className="block mb-2">
                                            Mobile
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile1"
                                            {...register("mobile1", {
                                                required: true
                                            })}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email1"
                                            className="block mb-2">
                                            E-mail
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <input
                                            type="email"
                                            id="email1"
                                            {...register(
                                                "email1",
                                                {
                                                    pattern:
                                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                },
                                                {
                                                    required: true
                                                }
                                            )}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.email1
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.email1 && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="nombre2"
                                            className="block mb-2">
                                            Nombre:
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre2"
                                            {...register("nombre2")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefono2"
                                            className="block mb-2">
                                            Teléfono:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefono2"
                                            {...register("telefono2")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mobile2"
                                            className="block mb-2">
                                            Mobile:
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile2"
                                            {...register("mobile2")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email2"
                                            className="block mb-2">
                                            E-mail:
                                        </label>
                                        <input
                                            type="email"
                                            id="email2"
                                            {...register("email2", {
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.email2
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.email2 && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="nombre3"
                                            className="block mb-2">
                                            Nombre:
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre3"
                                            {...register("nombre3")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="telefono3"
                                            className="block mb-2">
                                            Teléfono:
                                        </label>
                                        <input
                                            type="text"
                                            id="telefono3"
                                            {...register("telefono3")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mobile3"
                                            className="block mb-2">
                                            Mobile:
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile3"
                                            {...register("mobile3")}
                                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email3"
                                            className="block mb-2">
                                            E-mail:
                                        </label>
                                        <input
                                            type="email"
                                            id="email3"
                                            {...register("email3", {
                                                pattern:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                            className={`border border-gray-300 px-4 py-2 rounded-md w-full ${errors.email3
                                                ? "border-red-500"
                                                : ""
                                                }`}
                                        />
                                        {errors.email3 && (
                                            <p className="text-red-500">
                                                Porfavor ingrese un correo válido
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </section>
                            <hr className="my-5" />
                            <section>
                                <h2 className="text-bold">
                                    USARÉ EL DEPÓSITO PARA GUARDAR *
                                </h2>

                                <div className="grid xl:grid-rows-4 xl:grid-flow-col px-12 md:grid-row-1 gap-1 place-content-evenly mt-5">
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox1"
                                            {...register("checkbox1")}
                                        />
                                        <label htmlFor="checkbox1" className="mx-1">
                                            Herramientas
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox2"
                                            {...register("checkbox2")}
                                        />
                                        <label htmlFor="checkbox2" className="mx-1">
                                            Desalojo
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox3"
                                            {...register("checkbox3")}
                                        />
                                        <label htmlFor="checkbox3" className="mx-1">
                                            Materiales
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox4"
                                            {...register("checkbox4")}
                                        />
                                        <label htmlFor="checkbox4" className="mx-1">
                                            Carros
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox5"
                                            {...register("checkbox5")}
                                        />
                                        <label htmlFor="checkbox5" className="mx-1">
                                            Documentos / Archivos
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox6"
                                            {...register("checkbox6")}
                                        />
                                        <label htmlFor="checkbox6" className="mx-1">
                                            Mobiliario y Equipos
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox7"
                                            {...register("checkbox7")}
                                        />
                                        <label htmlFor="checkbox7" className="mx-1">
                                            Artículos de Hogar
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox8"
                                            {...register("checkbox8")}
                                        />
                                        <label htmlFor="checkbox8" className="mx-1">
                                            Repuestos
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox9"
                                            {...register("checkbox9")}
                                        />
                                        <label htmlFor="checkbox9" className="mx-1">
                                            Mercancía
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox10"
                                            {...register("checkbox10")}
                                        />
                                        <label
                                            onChange={handleCheckboxChange}
                                            htmlFor="checkbox10"
                                            className="mx-1">
                                            Muebles del Hogar
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            id="checkbox11"
                                            {...register("checkbox11")}
                                        />
                                        <label
                                            htmlFor="checkbox11"
                                            className="mx-1">
                                            Otros
                                        </label>
                                    </div>
                                </div>
                            </section>
                            <hr className="my-5" />
                            <section>
                                <div>
                                    <label htmlFor="file" className="block mb-2" required>
                                        Adjuntar Cédula o Pasaporte
                                        <span className="text-red-500">*</span>:
                                    </label>
                                    <BotonUpload
                                        handleFileChange={handleFileChange1}
                                        required
                                    />
                                </div>
                                {persona === "juridica" ? (
                                    <div>
                                        <label
                                            htmlFor="file"
                                            required
                                            className="block mb-2">
                                            Adjuntar aviso de operaciones
                                            <span className="text-red-500">*</span>:
                                        </label>
                                        <BotonUpload
                                            handleFileChange={handleFileChange2}
                                            required
                                        />
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                <h2 className="text-bold">
                                    Forman parte de un proceso judicial los bienes
                                    que serán almacenajes?
                                </h2>
                                <div className="flex gap-5 m-2">
                                    <div>
                                        <input
                                            type="radio"
                                            id="judicialSi"
                                            name="judicial"
                                            value="si"
                                            onChange={() => setJudicial("si")}
                                        />
                                        <label
                                            htmlFor="judicialSi"
                                            className="mx-1">
                                            Si
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="judicialNo"
                                            name="judicial"
                                            value="no"
                                            defaultChecked
                                            onChange={() => setJudicial("no")}
                                        />
                                        <label
                                            htmlFor="judicialNo"
                                            className="mx-1">
                                            No
                                        </label>
                                    </div>
                                </div>

                                {judicial === "si" ? (
                                    <>
                                        <div>
                                            <label
                                                htmlFor="nombredemandante"
                                                className="block mb-2">
                                                Nombre del demandante
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                                :
                                            </label>
                                            <input
                                                type="text"
                                                id="nombredemandante"
                                                {...register("nombredemandante")}
                                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="direcciondemandante"
                                                className="block mb-2">
                                                Direccion del demandante
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                                :
                                            </label>
                                            <input
                                                type="text"
                                                id="direcciondemandante"
                                                {...register("direcciondemandante")}
                                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="telefonodemandante"
                                                className="block mb-2">
                                                Teléfono
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                                :
                                            </label>
                                            <input
                                                type="text"
                                                id="telefonodemandante"
                                                {...register("telefonodemandante")}
                                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                                required
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div></div>
                                )}
                            </section>
                        </section>
                        <section>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className=" bg-orange-600 text-white text-2xl px-2 py-2 rounded-md my-5 w-64 lg:96">
                                    Enviar
                                </button>
                            </div>
                        </section>
                    </form>
                </section>
            }
        </>
    );
};
