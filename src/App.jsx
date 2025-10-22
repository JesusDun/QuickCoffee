import React, { useState } from 'react';

// Importamos los componentes de las pantallas
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import DetailScreen from './components/DetailScreen';
import CartScreen from './components/CartScreen';
import ConfirmationScreen from './components/ConfirmationScreen';

// Importamos los estilos de la App
import './styles/App.css';

function App() {
  // 'route' almacena el nombre de la pantalla actual
  const [route, setRoute] = useState('home');

  // Función para "navegar" (cambiar el estado de la ruta)
  const navigateTo = (screen) => {
    setRoute(screen);
  };

  // Función para renderizar la pantalla correcta
  const renderScreen = () => {
    switch (route) {
      case 'home':
        return <HomeScreen navigateTo={navigateTo} />;
      case 'menu':
        return <MenuScreen navigateTo={navigateTo} />;
      case 'detail':
        return <DetailScreen navigateTo={navigateTo} />;
      case 'cart':
        return <CartScreen navigateTo={navigateTo} />;
      case 'confirmation':
        return <ConfirmationScreen navigateTo={navigateTo} />;
      default:
        return <HomeScreen navigateTo={navigateTo} />;
    }
  };

  // Renderizamos el contenedor del móvil y dentro la pantalla activa
  return (
    <div className="mobile-viewport">
      <div className="mobile-container">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
