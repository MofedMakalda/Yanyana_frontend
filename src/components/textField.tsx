import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

interface TextFieldProps {
  type: string;
  placeHolder?: string;
  width?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string | number | readonly string[] | undefined;
  multiple?: boolean;
}

export const TextFieldComponent: React.FC<TextFieldProps> = ({
  type,
  name,
  placeHolder,
  width,
  onChange,
  value,
  multiple,
}) => {
  return (
    <TextField
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
      name={name}
      value={value}
      required
      autoComplete="off"
      inputProps={{
        ...(type === "file" && multiple ? { multiple: true } : {}),
      }}
      sx={{
        width: width,
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "white",
          color: "black",
          fontSize: {
            xs: "10px",
            md: "20px",
          },
          "& fieldset": {
            borderWidth: "4px",
          },
          "&:hover": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: "4px",
          },
        },
      }}
    />
  );
};
