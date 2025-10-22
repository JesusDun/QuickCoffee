import React from 'react';

const DetailScreen = ({ navigateTo }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <header className="sticky-header">
                <button onClick={() => navigateTo('menu')} className="p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-gray-900 text-center flex-grow">Detalle</h1>
                <div className="w-10"></div> {/* Espacio para balancear */}
            </header>

            {/* Contenido Principal (Scrollable) */}
            <main className="flex-grow overflow-y-auto">
                <img src="https://placehold.co/390x300/A08C7D/FFFFFF?text=Latte+Vainilla" alt="Latte de Vainilla" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-3xl font-bold text-gray-900">Latte Vainilla</h2>
                        <span className="text-3xl font-bold text-gray-900">$4.50</span>
                    </div>
                    <p className="text-gray-600 text-base mb-6">
                        Nuestro clásico espresso con leche vaporizada y un toque dulce de vainilla.
                    </p>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Tamaño</h3>
                        <div className="flex gap-3">
                            <input type="radio" name="size" id="size-s" className="option-input" defaultChecked />
                            <label htmlFor="size-s" className="option-label">Chico</label>
                            <input type="radio" name="size" id="size-m" className="option-input" />
                            <label htmlFor="size-m" className="option-label">Mediano</label>
                            <input type="radio" name="size" id="size-l" className="option-input" />
                            <label htmlFor="size-l" className="option-label">Grande</label>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Tipo de Leche</h3>
                        <div className="flex flex-wrap gap-3">
                            <input type="radio" name="milk" id="milk-entera" className="option-input" defaultChecked />
                            <label htmlFor="milk-entera" className="option-label">Entera</label>
                            <input type="radio" name="milk" id="milk-soya" className="option-input" />
                            <label htmlFor="milk-soya" className="option-label">Soya</label>
                            <input type="radio" name="milk" id="milk-almendra" className="option-input" />
                            <label htmlFor="milk-almendra" className="option-label">Almendra</label>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Fijo: Botón de Añadir */}
            <footer className="sticky-footer">
                <button 
                    onClick={() => navigateTo('cart')}
                    className="w-full bg-yellow-500 text-gray-900 font-bold py-4 rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-colors">
                    Añadir al Carrito - $4.50
                </button>
            </footer>
        </div>
    );
};

export default DetailScreen;
