import React from 'react';

const ConfirmationScreen = ({ navigateTo }) => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
            {/* Icono de Check */}
            <svg className="w-24 h-24 text-green-500 mb-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">¡Pedido Recibido!</h1>
            <p className="text-lg text-gray-600 mb-8">
                Tu pedido <span className="font-semibold text-gray-800">#12345</span> estará listo en 5 minutos.
            </p>
            <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-gray-800 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-gray-700 transition-colors">
                Volver al inicio
            </button>
        </main>
    );
};

export default ConfirmationScreen;
