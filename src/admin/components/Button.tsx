import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface AdminButtonProps extends ButtonProps {
  icon: React.ReactNode; // Icon can be any valid React element
  label: string;
  click: any;
}

export const AdminButton = ({ icon, label, click }: AdminButtonProps) => {
  return (
    <Button
      onClick={click}
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "darkblue",
      }}
      variant="contained"
    >
      {icon}
      {label}
    </Button>
  );
};

//Text Field

// import { TextField, TextFieldProps } from "@mui/material";

// interface AdminTextFieldProps extends TextFieldProps {
//   label: string;
// }

// export const AdminTextField: React.FC<AdminTextFieldProps> = ({ label, ...props }) => {
//   return (
//     <TextField
//       label={label}
//       variant="outlined" // You can choose any variant (outlined, filled, standard)
//       fullWidth
//       {...props} // Spread additional props here like value, onChange, etc.
//     />
//   );
// };
