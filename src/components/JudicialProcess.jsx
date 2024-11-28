
export const JudicialProcess = ({ register, judicial, setJudicial }) => {
    return (
        <section>
            <h2 className="text-bold">
                Forman parte de un proceso judicial los bienes que serán
                almacenajes?
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
                    <label htmlFor="judicialSi" className="mx-1">
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
                    <label htmlFor="judicialNo" className="mx-1">
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
                            <span className="text-red-500">*</span>:
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
                            <span className="text-red-500">*</span>:
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
                            <span className="text-red-500">*</span>:
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
    );
};

