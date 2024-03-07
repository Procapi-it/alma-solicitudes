import Logo from "../assets/almacenajes.webp";
export const Nav = () => {
    return (
        <>
            <nav className="mt-5">
                <div className="flex flex-col justify-cente items-center">
                    <img
                        src={Logo}
                        alt="Almacenajes Logo"
                    />
                    <h1 className="mt-5 font-bold text-2xl">Solicitud de Depósito</h1>
                </div>
            </nav>
        </>
    );
};
