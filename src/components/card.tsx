import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface MultiActionAreaCardProps {
  title: string;
  image: string;
  onClick?: () => void; // Add the onClick prop
}

export default function MultiActionAreaCard({
  title,
  image,
  onClick,
}: MultiActionAreaCardProps) {
  return (
    <Card sx={{ 
      width: {
        md: "70%",
        xs: "90%"
      }, 
      height:{
        xs:'200px' ,
        md:"400px",
      },
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat:"no-repeat",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <CardActionArea 
        sx={{ width: '100%', height: '100%',  backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClick} // Pass the onClick handler to CardActionArea
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
