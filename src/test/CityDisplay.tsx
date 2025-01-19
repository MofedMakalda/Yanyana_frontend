// src/components/CityDisplay.tsx

import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

interface IHotel {
    hotelName: string;  // Changed from hotelname to hotelName
    nightPackage: string; // Changed from nightpackage to nightPackage
    price: string;
    address: string;
    hotelImages: string[];
}

interface ICity {
    cityName: string;   // Changed from cityname to cityName
    cityImage: string;
    description: string;
    hotels: IHotel[];
}

const CityDisplay: React.FC = () => {
    const [cities, setCities] = useState<ICity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:3002/cities');
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                const data = await response.json();
                setCities(data);
            } catch (err) {
                setError((err as Error).message);  // Ensure error message is set correctly
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            {loading && <Typography variant="h6">Loading...</Typography>}
            {error && <Typography color="error">Error: {error}</Typography>}
            {!loading && !error && (
                <Grid container spacing={2}>
                    {cities.map((city) => (
                        <Grid item xs={12} sm={6} md={4} key={city.cityName}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={city.cityImage}
                                    alt={city.cityName} // Updated to cityName
                                />
                                <CardContent>
                                    <Typography variant="h5">{city.cityName}</Typography>  // Updated to cityName
                                    <Typography variant="body2" color="text.secondary">
                                        {city.description}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2 }}>Hotels:</Typography>
                                    {city.hotels.map((hotel) => (
                                        <Box key={hotel.hotelName} sx={{ mb: 1 }}>  // Updated to hotelName
                                            <Typography variant="subtitle1">{hotel.hotelName}</Typography> // Updated to hotelName
                                            <Typography variant="body2">{hotel.nightPackage} - ${hotel.price}</Typography> // Updated to nightPackage
                                        </Box>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default CityDisplay;
