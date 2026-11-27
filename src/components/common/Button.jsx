const Button = ({ children, variant = 'primary', size = 'md', onClick, type = 'button', disabled, fullWidth, className = '' }) => {
  const base = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
  };
  const sizes = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'btn-full' : ''} ${className}`}
      style={styles[`${variant}${size ? size.charAt(0).toUpperCase() + size.slice(1) : ''}`]}
    >
      {children}
      <style>{buttonStyles}</style>
    </button>
  );
};

const styles = {};

const buttonStyles = `
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  white-space: nowrap;
}
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover:not(:disabled) { background: var(--primary-dark); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-secondary { background: var(--secondary); color: white; }
.btn-secondary:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.btn-outline { border: 2px solid var(--primary); color: var(--primary); background: transparent; }
.btn-outline:hover:not(:disabled) { background: var(--primary); color: white; }
.btn-ghost { color: var(--text-primary); background: transparent; }
.btn-ghost:hover:not(:disabled) { background: var(--bg-secondary); }
.btn-danger { background: var(--error); color: white; }
.btn-sm { padding: 0.375rem 0.875rem; font-size: var(--fs-sm); }
.btn-md { padding: 0.625rem 1.25rem; font-size: var(--fs-base); }
.btn-lg { padding: 0.875rem 2rem; font-size: var(--fs-lg); }
.btn-full { width: 100%; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export default Button;