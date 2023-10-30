import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { InputProps } from "./Input.types";

const Input = (
  props: { field: ControllerRenderProps<FieldValues, string> } & TextFieldProps
) => {
  return <TextField {...props} />;
};

const InputController = ({
  name,
  rules,
  defaultValue,
  disabled,
  placeholder,
  type = "text",
  variant = "outlined",
  label,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={rules}
      render={({ field }) => (
        <Input
          field={field}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          variant={variant}
          label={label}
        />
      )}
    />
  );
};

export default InputController;
