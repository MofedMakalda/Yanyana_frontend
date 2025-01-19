import { forwardRef, useState } from "react";

interface TextFieldWithFocusShadowProps {
  placeholder: string;
  type: string;
  name: string;
}

const TextFieldWithFocusShadow = forwardRef<HTMLInputElement, TextFieldWithFocusShadowProps>(
  ({ placeholder, type, name }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const textFieldStyle = {
      width: "100%",
      padding: "17px",
      fontSize: "16px",
      border: "5px solid rgb(0, 0, 0)",
      borderRadius: "5px",
      outline: "none",
      boxShadow: isFocused ? "0 0 35px 6px rgba(255, 255, 255, 0.92)" : "none",
      transition: "box-shadow 0.3s ease",
      backgroundColor: "white",
      color: "black", // Ensure text is visible on grey background
    };

    return (
      <>
        <style>
          {`
            .custom-textfield::placeholder {
              color: black;
              opacity: 1;
            }
          `}
        </style>
        <input
          type={type}
          className="custom-textfield"
          style={textFieldStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          ref={ref}
          name={name}
        />
      </>
    );
  }
);

export default TextFieldWithFocusShadow;



// import React, { forwardRef } from "react";

// interface TextFieldProps {
//   placeholder: string;
//   type: string;
//   name: string;
// }

// const TextFieldWithFocusShadow = forwardRef<HTMLInputElement, TextFieldProps>(
//   ({ placeholder, type, name }, ref) => {
//     return (
//       <input
//         ref={ref}
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         style={{
//           width: "100%",
//           padding: "10px",
//           border: "2px solid #c2992e",
//           borderRadius: "5px",
//           outline: "none",
//           backgroundColor: "black",
//           color: "white",
//           fontSize: "16px",
//         }}
//       />
//     );
//   }
// );

// export default TextFieldWithFocusShadow;

