import React from 'react';

const MenuScreen = ({ navigateTo }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header del Menú */}
            <header className="sticky-header justify-between">
                <h1 className="text-xl font-semibold text-gray-900 text-center flex-grow">Menú</h1>
                <button onClick={() => navigateTo('cart')} className="p-2 rounded-full hover:bg-gray-100 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
            </header>
            
            {/* Contenido del Menú */}
            <main className="flex-grow p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cafés</h2>
                
                {/* Producto 1 */}
                <div onClick={() => navigateTo('detail')} className="flex items-center gap-4 mb-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <img src="https://placehold.co/80x80/A08C7D/FFFFFF?text=Latte" alt="Latte Vainilla" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">Latte Vainilla</h3>
                        <p className="text-gray-600 text-sm">Espresso, leche y vainilla.</p>
                    </div>
                    <span className="text-lg font-medium text-gray-800">$4.50</span>
                </div>
                
                {/* Producto 2 */}
                <div className="flex items-center gap-4 mb-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <img src="https://placehold.co/80x80/7B5E4A/FFFFFF?text=Mocha" alt="Mocha" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">Mocha Helado</h3>
                        <p className="text-gray-600 text-sm">Chocolate, espresso y leche fría.</p>
                    </div>
                    <span className="text-lg font-medium text-gray-800">$5.00</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Postres</h2>
                
                {/* Producto 3 */}
                <div className="flex items-center gap-4 mb-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <img src="https://placehold.co/80x80/D4A276/FFFFFF?text=Croissant" alt="Croissant" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">Croissant de Almendras</h3>
                        <p className="text-gray-600 text-sm">Hojaldrado y dulce.</p>
                    </div>
                    <span className="text-lg font-medium text-gray-800">$3.00</span>
                </div>
            </main>
        </div>
    );
};

export default MenuScreen;
