import React from 'react';
import './InputField.css'; // Importe o arquivo CSS personalizado

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="input-field-container">
      <label className="input-field-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
