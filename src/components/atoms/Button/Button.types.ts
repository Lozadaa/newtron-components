export interface ButtonProps {
  id?: string,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  variant?: 'text' | 'outlined' | 'contained',
  type?: 'submit' | 'button',
  children: string,
  fullWidth?: boolean, 
  size?: 'small' | 'medium' | "large",
  isLoading?: boolean,
  onClick?: () => void,
}