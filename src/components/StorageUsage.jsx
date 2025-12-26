
export const StorageUsage = ({ register }) => {
    return (
        <section>
            {/* Pregunta 1: Tipo de uso */}
            <div className="mb-6">
                <h2 className="font-bold mb-3">
                    1. ¿Para qué tipo de uso requiere el depósito?
                    <span className="text-red-500">*</span>
                </h2>
                <div className="flex flex-col gap-2 ml-4">
                    <div>
                        <input
                            type="radio"
                            id="tipoUsoResidencial"
                            value="Residencial (bienes personales/familiares)"
                            {...register("tipoUso", { required: true })}
                        />
                        <label htmlFor="tipoUsoResidencial" className="mx-2">
                            Residencial (bienes personales/familiares)
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="tipoUsoComercial"
                            value="Comercial (bienes de negocio)"
                            {...register("tipoUso", { required: true })}
                        />
                        <label htmlFor="tipoUsoComercial" className="mx-2">
                            Comercial (Bienes de negocio o empresa)
                        </label>
                    </div>
                </div>
            </div>

            {/* Pregunta 2: Tipo de bienes */}
            <div className="mb-6">
                <h2 className="font-bold mb-3">
                    2. ¿Qué tipo de bienes almacenará principalmente?
                    <span className="text-red-500">*</span>
                </h2>
                <div className="flex flex-col gap-2 ml-4">
                    <div>
                        <input
                            type="radio"
                            id="tipoBienesMuebles"
                            value="Muebles o mobiliario"
                            {...register("tipoBienes", { required: true })}
                        />
                        <label htmlFor="tipoBienesMuebles" className="mx-2">
                            Muebles o mobiliario
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="tipoBienesEnseres"
                            value="Enseres del hogar"
                            {...register("tipoBienes", { required: true })}
                        />
                        <label htmlFor="tipoBienesEnseres" className="mx-2">
                            Enseres del hogar
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="tipoBienesDocumentos"
                            value="Documentos/archivos"
                            {...register("tipoBienes", { required: true })}
                        />
                        <label htmlFor="tipoBienesDocumentos" className="mx-2">
                            Documentos/archivos
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="tipoBienesMercancia"
                            value="Mercancía/productos"
                            {...register("tipoBienes", { required: true })}
                        />
                        <label htmlFor="tipoBienesMercancia" className="mx-2">
                            Mercancía/productos
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="tipoBienesEquipo"
                            value="Equipos, herramientas o equipo de tecnología"
                            {...register("tipoBienes", { required: true })}
                        />
                        <label htmlFor="tipoBienesEquipo" className="mx-2">
                            Equipos, herramientas o equipo de tecnología
                        </label>
                    </div>
                </div>
            </div>

            {/* Pregunta 3: Procedencia de bienes */}
            <div className="mb-6">
                <h2 className="font-bold mb-3">
                    3. ¿Dónde estaban estos bienes antes de traerlos al depósito?
                    <span className="text-red-500">*</span>
                </h2>
                <div className="flex flex-col gap-2 ml-4">
                    <div>
                        <input
                            type="radio"
                            id="procedenciaPropio"
                            value="Espacio propio o alquilado de uso diario (residencia, oficina, local)"
                            {...register("procedenciaBienes", { required: true })}
                        />
                        <label htmlFor="procedenciaPropio" className="mx-2">
                            Espacio propio o alquilado de uso diario (Residencia, oficina o local comercial)
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="procedenciaTercero"
                            value="Espacio de un tercero (proveedor, bodega externa, país de origen)"
                            {...register("procedenciaBienes", { required: true })}
                        />
                        <label htmlFor="procedenciaTercero" className="mx-2">
                            Espacio de un tercero (Bodega externa, país de origen)
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

