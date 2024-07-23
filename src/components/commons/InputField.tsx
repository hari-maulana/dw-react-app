import { Input } from "@mui/material";

interface InputFieldProps {
  placeholder: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type }) => {
  return <Input type={type} placeholder={placeholder} sx={{border: "2px solid gray", borderRadius: "10px", color: "silver", padding: "5px", marginTop: "20px"}} required/>;
};

export default InputField;