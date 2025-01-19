
import { Box, Typography } from "@mui/material";

interface BoxSxProps {
  text: string;
  iconSrc?: string; // Optional PNG image source
}

export default function BoxSx({ text, iconSrc }: BoxSxProps) {
  return (
    <Box
      sx={{
        width: {
          xs: 90, // Width for extra-small screens (phones)
          md: 170,  // Width for medium screens and above
        },
        height: {
          xs: 70, // Height for extra-small screens (phones)
          md: 170,  // Height for medium screens and abovessssssss
        },
        borderRadius:{
          xs:2,
          md: 5,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003366',
        marginTop:0  
      }}
    >
      <Typography
        
        color="white"
        sx={{
          mb: 1,
          textAlign: 'center',
          lineHeight: 1.2,
          fontSize:{
            xs: '6px',
            md: '18px'
          },
        }}
      >
        {text}
      </Typography>
      {iconSrc && (
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:{
            xs:"25px",
            md:"60px" 
          },
          height:{
            xs:"25px",
            md:"60px" 
          }
        }}>
          <img
            src={iconSrc}
            alt="icon"
            style={{
              width: "100%", // Static sizes based on the condition
              height: "100%",
            }}
          />
        </Box>
      )}
    </Box>
  );
}

