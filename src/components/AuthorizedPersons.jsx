export const AuthorizedPersons = ({ register, errors }) => {
    return (
        <section>
            <h2 className="text-bold mb-5">
                PERSONAS AUTORIZADAS POR EL ARRENDATARIO PARA INGRESAR AL
                DEPÓSITO
            </h2>

            <div className="grid grid-rows-2 md:grid-cols-4 gap-2 mt-2">
                <div>
                    <label htmlFor="nombre1" className="block mb-2">
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
                    <label htmlFor="telefono1" className="block mb-2">
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
                    <label htmlFor="mobile1" className="block mb-2">
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
                    <label htmlFor="email1" className="block mb-2">
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
                        className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                            errors.email1 ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email1 && (
                        <p className="text-red-500">
                            Porfavor ingrese un correo válido
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="nombre2" className="block mb-2">
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
                    <label htmlFor="telefono2" className="block mb-2">
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
                    <label htmlFor="mobile2" className="block mb-2">
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
                    <label htmlFor="email2" className="block mb-2">
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email2"
                        {...register("email2", {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                            errors.email2 ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email2 && (
                        <p className="text-red-500">
                            Porfavor ingrese un correo válido
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="nombre3" className="block mb-2">
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
                    <label htmlFor="telefono3" className="block mb-2">
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
                    <label htmlFor="mobile3" className="block mb-2">
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
                    <label htmlFor="email3" className="block mb-2">
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email3"
                        {...register("email3", {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        className={`border border-gray-300 px-4 py-2 rounded-md w-full ${
                            errors.email3 ? "border-red-500" : ""
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
    );
};

