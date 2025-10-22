export const BrandsInfo = ({ register, setValue }) => {
  const handleSelectChange = (event) => {
    const selectedSucursal = event.target.value
    const sucursalEmails = {
      vh: [
        "vistahermosa@almacenajes.net",
        "ventas.vistahermosa@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      ce: [
        "costadeleste@almacenajes.net",
        "ventas.costadeleste@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      ra: [
        "rioabajo@almacenajes.net",
        "ventas.rioabajo@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      al: [
        "albrook@almacenajes.net",
        "ventas.albrook@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      sa: [
        "sanantonio@almacenajes.net",
        "ventas.sanantonio@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      co: ["colon@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
      mocho: [
        "milla8@almacenajes.net",
        "ventas.milla8@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net",
      ],
      go: ["gorgona@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
      da: ["david@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
      hm: ["hatomontana@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
      tm: ["ventas.tumbamuerto@almacenajes.net", "callcenter2@almacenajes.net", "callcenter3@almacenajes.net"],
    }
    const emails = sucursalEmails[selectedSucursal] || []
    const emailsText = emails.join(", ")

    setValue("emails", emailsText)
  }

  return (
    <section>
      <div className="mb-4">
        <label htmlFor="sucursales" className="block mb-2">
          Sucursal<span className="text-red-500">*</span>:
        </label>
        <select
          id="sucursales"
          {...register("sucursales", { required: true })}
          onChange={handleSelectChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        >
          <option value="">Seleccione:</option>
          <option value="vh">Vista Hermosa</option>
          <option value="ce">Costa del Este</option>
          <option value="ra">Rio Abajo</option>
          <option value="al">Albrook</option>
          <option value="sa">San Antonio</option>
          <option value="co">Colón</option>
          <option value="mocho">Milla 8</option>
          <option value="go">Gorgona</option>
          <option value="da">David</option>
          <option value="hm">Hato Montaña</option>
          <option value="tm">Tumba Muerto</option>
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
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        >
          <option value="">Seleccione:</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <label htmlFor="textomeses" className="text-sm text-gray-600">
          Meses
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mb-4">
          <label htmlFor="razonprincipal" className="block mb-2">
            ¿Cuál es la razón principal por la que necesita el depósito?
            <span className="text-red-500">*</span>:
          </label>
          <select
            id="razonprincipal"
            {...register("razonprincipal", { required: true })}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          >
            <option value="">Seleccione:</option>
            <option value="Liberar espacio en vivienda/negocio">Liberar espacio en vivienda/negocio</option>
            <option value="Esperar de inmueble (por remodelación, propio o rentado)">Esperar de inmueble (por remodelación, propio o rentado)</option>
            <option value="Guardar temporalmente hasta vender/regalar/descartar">Guardar temporalmente hasta vender/regalar/descartar</option>
            <option value="Guardar de forma permanente/indefinida en lugar seguro">Guardar de forma permanente/indefinida en lugar seguro</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="tiempodesocupar" className="block mb-2">
            ¿Cuándo planea desocupar la bodega?
            <span className="text-red-500">*</span>:
          </label>
          <select
            id="tiempodesocupar"
            {...register("tiempodesocupar", { required: true })}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          >
            <option value="">Seleccione:</option>
            <option value="Entre 1 y 6 meses">Entre 1 y 6 meses</option>
            <option value="Entre 7 y 12 meses">Entre 7 y 12 meses</option>
            <option value="En más de 12 meses">En más de 12 meses</option>
          </select>
        </div>
      </div>
    </section>
  )
}

