import React from 'react';

const CartScreen = ({ navigateTo }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header del Carrito */}
            <header className="sticky-header">
                <button onClick={() => navigateTo('menu')} className="p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-gray-900 text-center flex-grow">Mi Carrito</h1>
                <div className="w-10"></div> {/* Espacio para balancear */}
            </header>

            {/* Contenido del Carrito */}
            <main className="flex-grow p-6 overflow-y-auto">
                {/* Item 1 */}
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://placehold.co/80x80/A08C7D/FFFFFF?text=Latte" alt="Latte Vainilla" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">Latte Vainilla</h3>
                        <p className="text-gray-600 text-sm">Mediano, Leche de Soya</p>
                    </div>
                    <span className="text-lg font-medium text-gray-800">$4.50</span>
                </div>
                <hr className="my-4 border-gray-200" />
                
                {/* Resumen de Costos */}
                <div className="space-y-2">
                    <div className="flex justify-between text-base text-gray-600">
                        <span>Subtotal</span>
                        <span>$4.50</span>
                    </div>
                    <div className="flex justify-between text-base text-gray-600">
                        <span>Servicio</span>
                        <span>$0.50</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-900 mt-2">
                        <span>Total</span>
                        <span>$5.00</span>
                    </div>
                </div>
            </main>

            {/* Footer Fijo: Botón de Pagar */}
            <footer className="sticky-footer">
                <button 
                    onClick={() => navigateTo('confirmation')}
                    className="w-full bg-yellow-500 text-gray-900 font-bold py-4 rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-colors">
                    Confirmar y Pagar - $5.00
                </button>
            </footer>
        </div>
    );
};

export default CartScreen;
