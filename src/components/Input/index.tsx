import { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  label: string;
}

export const CustomButton: FC<InputProps> = ({ type, value, onChange, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{placeholder}</label>
      <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} />
    </>
  );
};
