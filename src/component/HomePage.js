// HomePage.js
import React from 'react';
import DropdownForm from './DropdownForm';
import SelecaoHome from './SelecaoHome';

const HomePage = () => {
  return (
    <div>
      <h1>HOME</h1>
      <h4>VAMOS COMPRAR!!!</h4>
      <DropdownForm />

      <div>
        <img
          src="./img/perfil.jpg"
          alt="Foto de Perfil"
          
        />
      </div>
      <div>
        <p>Bem-vindo, Luke, vamos às compras</p>
      </div>
        <div>
          <SelecaoHome/>
        <div>
          <SelecaoHome/>
        </div>
        <div>
          <SelecaoHome/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
