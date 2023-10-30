import { RegisterOptions } from "react-hook-form";

export type InputProps = {
  name: string,
  type?: 'text' | 'number' | 'date' | 'textarea';
  placeholder?: string;
  rules?: Pick<RegisterOptions, 'maxLength' | 'minLength' | 'validate' | 'required'>;
  disabled?: boolean,
  variant?: 'outlined' | 'filled',
  fullWidth?: boolean,
  label?: string,
  defaultValue?: string | number,
}