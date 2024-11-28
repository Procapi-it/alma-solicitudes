
export const StorageUsage = ({ register }) => {
    const handleCheckboxChange = event => {
        const selectedCheckbox = event.target.value;
        register("queGuardar", { value: selectedCheckbox });
    };

    return (
        <section>
            <h2 className="text-bold">USARÉ EL DEPÓSITO PARA GUARDAR *</h2>

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
                    <label htmlFor="checkbox11" className="mx-1">
                        Otros
                    </label>
                </div>
            </div>
        </section>
    );
};

