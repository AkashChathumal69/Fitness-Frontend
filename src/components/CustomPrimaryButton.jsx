import React from 'react';

function CustomPrimaryButton({ children, style, onClick }) {
  const defaultStyles = {
    backgroundColor: '#FF7420',
    color: 'FFFFFF',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '18px',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    border: 'none',
    // width: '450px',
    height: '60px',
  };

  const buttonStyles = {
    ...defaultStyles,
    ...style,
  };
  return (
    <div>
      <button className="primary-button" style={buttonStyles} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default CustomPrimaryButton;
