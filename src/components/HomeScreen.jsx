import React from 'react';

const HomeScreen = ({ navigateTo }) => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
            <img 
                src="https://placehold.co/150x150/634133/FFFFFF?text=QC" 
                alt="Logo Quick Coffee" 
                className="rounded-full mb-6 animate-pulse" 
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Bienvenido a <br />Quick Coffee</h1>
            <p className="text-lg text-gray-600 mb-12">Tu dosis de energía, rápido.</p>
            <img 
                src="https://placehold.co/300x200/A08C7D/FFFFFF?text=Promoción" 
                alt="Promoción" 
                className="rounded-lg shadow-lg mb-12"
            />
            
            <button 
                onClick={() => navigateTo('menu')}
                className="w-full bg-yellow-500 text-gray-900 font-bold py-4 rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Hacer un pedido
            </button>
        </main>
    );
};

export default HomeScreen;
