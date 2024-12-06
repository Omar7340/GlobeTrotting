import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      style={{ 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer' 
      }} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
