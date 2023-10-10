// DropdownForm.js
import React, { useState } from 'react';
import SelecaoHome from './SelecaoHome';
import './style.css';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para a opção selecionada

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Atualizar o estado com a opção selecionada
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Você pode usar a opção selecionada (selectedOption) aqui para realizar ações com base na escolha.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Selecione uma opção:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecione...</option>
          <option value="opcao1"><SelecaoHome/></option>
          <option value="opcao2"><SelecaoHome/></option>
          <option value="opcao3"><SelecaoHome/></option>
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default DropdownForm;
