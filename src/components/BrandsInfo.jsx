
export const BrandsInfo = ({ register }) => {
  const handleSelectChange = (event) => {
    const selectedSucursal = event.target.value;
    const sucursalEmails = {
      vh: [
        "vistahermosa@almacenajes.net",
        "ventas.vistahermosa@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      ce: [
        "costadeleste@almacenajes.net",
        "ventas.costadeleste@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      ra: [
        "rioabajo@almacenajes.net",
        "ventas.rioabajo@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      al: [
        "albrook@almacenajes.net",
        "ventas.albrook@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      sa: [
        "sanantonio@almacenajes.net",
        "ventas.sanantonio@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      co: [
        "colon@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      mocho: [
        "milla8@almacenajes.net",
        "ventas.milla8@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      go: [
        "gorgona@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      da: [
        "david@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      hm: [
        "hatomontana@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ],
      tm: [
        "ventas.tumbamuerto@almacenajes.net",
        "callcenter2@almacenajes.net",
        "callcenter3@almacenajes.net"
      ]
    };
    const emails = sucursalEmails[selectedSucursal] || [];
    const emailsText = emails.join(", ");
    register("emails", { value: emailsText });
  };

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
          <label htmlFor="fechaocupacion" className="block mb-2">
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
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          >
            <option value="">Seleccione:</option>
            <option value="Viaje">Viaje</option>
            <option value="Reducción de gastos">Reducción de Gastos</option>
            <option value="Alquilo su vivienda">Alquilo su vivienda</option>
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
  );
};
