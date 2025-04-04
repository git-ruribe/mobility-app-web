"use client";

import React from 'react';
import { FaChartLine, FaDumbbell, FaGear, FaMessage, FaUser } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

// Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: React.ElementType;
  className?: string; // Add this line
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  icon: Icon,
  className = '',
}) => {
  const baseClasses = 'rounded-xl font-medium flex items-center justify-center transition-colors';
  
  const variantClasses = {
    primary: 'bg-[#2E86C1] text-white hover:bg-[#1A5276]',
    secondary: 'bg-[#27AE60] text-white hover:bg-[#1E8449]',
    outline: 'bg-white text-[#2C3E50] border-2 border-[#2C3E50] hover:bg-gray-100',
    ghost: 'bg-transparent text-[#2C3E50] hover:bg-gray-100',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-lg py-2 px-4',
    lg: 'text-xl py-3 px-6',
    xl: 'text-2xl py-4 px-8',
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <span className="mr-2"><Icon /></span>}
      {children}
    </button>
  );
};

// IconButton component
interface IconButtonProps {
  icon: React.ElementType;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
}) => {
  const baseClasses = 'rounded-full flex items-center justify-center transition-colors';
  
  const variantClasses = {
    primary: 'bg-[#2E86C1] text-white hover:bg-[#1A5276]',
    secondary: 'bg-[#27AE60] text-white hover:bg-[#1E8449]',
    outline: 'bg-white text-[#2C3E50] border-2 border-[#2C3E50] hover:bg-gray-100',
  };
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon />
    </button>
  );
};

// Card component
interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">{title}</h2>}
      {children}
    </div>
  );
};

// Input component
interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-lg text-[#566573] mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E86C1] border-gray-300"
      />
    </div>
  );
};

// ProgressBar component
interface ProgressBarProps {
  progress: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
}) => {
  return (
    <div>
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#27AE60]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {label && (
        <p className="text-lg text-[#566573] mt-2">{label}</p>
      )}
    </div>
  );
};

// Navigation icons
export const navIcons = {
  home: FaHome,
  exercises: FaDumbbell,
  progress: FaChartLine,
  messages: FaMessage,
  profile: FaUser,
  settings: FaGear,
};
