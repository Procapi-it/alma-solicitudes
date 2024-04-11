import { useEffect } from 'react';
import Confetti from 'react-confetti';
import Logo from '../assets/almacenajes.webp';

export const Completed = () => {
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => clearTimeout(redirectTimeout);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="flex flex-col justify-cente items-center mb-32">
                <img
                    src={Logo}
                    alt="Almacenajes Logo"
                />
            </div>
            <h1 className="text-4xl font-bold text-center">
                Gracias por haber completado la solicitud! 😊🎉🎉
            </h1>
        </div>
    );
};
