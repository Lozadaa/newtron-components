import ButtonMUI from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { ButtonProps } from './Button.types';

const Button = ({
  id,
  color = 'primary', 
  children, 
  disabled,
  size = 'large',
  fullWidth,
  variant = 'outlined',
  type = 'button',
  isLoading,
  onClick,
}: ButtonProps) => {
  const ButtonVariant = isLoading ? LoadingButton : ButtonMUI;
  return (
    <ButtonVariant
      id={id}
      color={color}
      type={type}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant}
      loading={isLoading}
      disabled={!!disabled}>
      {children}
    </ButtonVariant>
  );
};

export default Button;