import React from "react";

interface InputProps {
  id?: string;
  label?: string;
  name: string; 
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  iconPassword?: React.ReactNode;
}

export default function Input({
  id,
  label,
  name, 
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  icon,
  iconPassword,
}: InputProps) {
  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}

      <div className="input-wrapper">
        {icon && <div className="icon">{icon}</div>}
        {icon && <div className="input-separator"></div>} 

        <input
          id={id}
          name={name} 
          type={type}
          value={value}
          onChange={onChange} 
          onBlur={onBlur}
          onFocus={onFocus}
          className="input-field"
        />

        {iconPassword && <div className="password-icon">{iconPassword}</div>}
      </div>
    </div>
  );
}
