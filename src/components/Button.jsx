import React from 'react';

const Button = ({ children, styles }) => {
  return (
    <button
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
    >
      {children}
    </button>
  );
};

export default Button;
