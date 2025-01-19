import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface MultiActionAreaCardProps {
  title: string;
  image: string;
}

export default function CityCard({
  title,
  image,
}: MultiActionAreaCardProps) {
  return (
    <Card sx={{ 
      width: {
        md: "70%",
        xs: "100%"
      }, 
      height: "200px", // Adjust height as needed
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white', // Optional: to make text readable against the image
      position: 'relative'
    }}>
      <CardActionArea sx={{ width: '100%', height: '100%',  backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
