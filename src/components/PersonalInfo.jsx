
export const PersonalInfo = ({ register, errors, persona, setPersona }) => {
  return (
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
            <label htmlFor="personaNatural" className="mx-1">
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
            <label htmlFor="personaJuridica" className="mx-1">
              Persona Jurídica
            </label>
          </div>
        </div>
      </div>
      {persona === "natural" ? (
        <div className="md:col-span-3 lg:grid lg:grid-cols-3 gap-2 mt-2">
          <div>
            <label htmlFor="nombrenatural" className="block mb-2">
              Nombre<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="nombrenatural"
              {...register("nombrenatural", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block mb-2">
              Apellidos<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="apellido"
              {...register("apellido", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="cedula" className="block mb-2">
              Cédula o Pasaporte<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="cedula"
              {...register("cedula", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="nacimiento" className="block mb-2">
              Fecha de nacimiento<span className="text-red-500">*</span>:
            </label>
            <input
              type="date"
              id="nacimiento"
              {...register("nacimiento", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="col-span-3">
            <label htmlFor="direccion" className="block mb-2">
              Dirección<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="text"
              {...register("direccion", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="telefonoResidencial" className="block mb-2">
              Teléfono Residencial<span className="text-red-500">*</span>:
            </label>
            <input
              type="number"
              id="telefonoResidencial"
              {...register("telefonoResidencial", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-2">
              Mobile<span className="text-red-500">*</span>:
            </label>
            <input
              type="number"
              id="mobile"
              {...register("mobile", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="telefonoOficina" className="block mb-2">
              Teléfono Oficina<span className="text-red-500">*</span>:
            </label>
            <input
              type="number"
              id="telefonoOficina"
              {...register("telefonoOficina", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="correo" className="block mb-2">
              E-Mail<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="correo"
              {...register("correo", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                errors.correo ? "border-red-500" : ""
              }`}
            />
            {errors.correo && (
              <p className="text-red-500">
                Porfavor ingrese un correo válido
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label htmlFor="confirmeemail" className="block mb-2">
              Confirme su E-Mail<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="confirmeemail"
              {...register("confirmeemail", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                errors.confirmeemail ? "border-red-500" : ""
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
            <label htmlFor="compania" className="block mb-2">
              Nombre de la compañia<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="compania"
              {...register("compania", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="ruc" className="block mb-2">
              R.U.C<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="ruc"
              {...register("ruc", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="dv" className="block mb-2">
              D.V<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="dv"
              {...register("dv", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="representante" className="block mb-2">
              Nombre del Representante Legal
              <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="representante"
              {...register("representante", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="cedularepresentante" className="block mb-2">
              Cédula o Pasaporte<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="cedularepresentante"
              {...register("cedularepresentante", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="percontacto" className="block mb-2">
              Nombre de la persona de contacto
              <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="percontacto"
              {...register("percontacto", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="cedulacontacto" className="block mb-2">
              Cédula o Pasaporte<span className="text-red-500">*</span>:
            </label>
            <input
              type="number"
              id="cedulacontacto"
              {...register("cedulacontacto", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="span-col-3">
            <label htmlFor="telefonocontacto" className="block mb-2">
              Teléfono Oficina<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="telefonocontacto"
              {...register("telefonocontacto", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="telefonotrabajo" className="block mb-2">
              Teléfono Trabajo<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="telefonotrabajo"
              {...register("telefonotrabajo", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="telefonotrabajo2" className="block mb-2">
              Teléfono Oficina 2<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="telefonotrabajo2"
              {...register("telefonotrabajo2", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="mobilejuridico" className="block mb-2">
              Mobile:<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="mobilejuridico"
              {...register("mobilejuridico", { required: true })}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="correojuridico" className="block mb-2">
              E-Mail<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="correojuridico"
              {...register("correojuridico", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                errors.correojuridico ? "border-red-500" : ""
              }`}
            />
            {errors.correojuridico && (
              <p className="text-red-500">
                Porfavor ingrese un correo válido
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label htmlFor="confirmeemailjuridico" className="block mb-2">
              Confirme su E-Mail<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="confirmeemailjuridico"
              {...register("confirmeemailjuridico", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                errors.confirmeemailjuridico ? "border-red-500" : ""
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
    </section>
  );
};

