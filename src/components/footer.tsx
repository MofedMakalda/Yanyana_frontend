import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#003366",
        color: "white",
        textAlign: "center",
        padding: 0, // No padding
        margin: 0, // Ensure no margin
        width: "100%", // Full width
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.5rem" } }} variant="body1">
        Yanyana Group
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        YanYana.group@gmail.com
      </Typography>
      <Typography variant="body2">
        Created by Mofed Makalda
      </Typography>
      <Box sx={{ marginTop: "8px" }}>
        <Link 
          href="https://www.instagram.com/yourusername"
          target="_blank"
          sx={{ 
            color: "white", 
            textDecoration: "none", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            padding: 0, // No padding
          }}
        >
          <InstagramIcon sx={{ marginRight: "5px" }} />
          <Typography variant="body2">Follow us on Instagram</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
