

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface HotelData {
    hotelname: string;
    nightpackage: string;
    price: string;
    address: string;
    departure: string; // New field for departure
    arrival: string; // New field for arrival
    hotelImages: File[];
}

interface CityData {
    cityname: string;
    description?: string; // Make description optional
    cityImage: File | null;
    hotels: HotelData[];
}

const CityUpload: React.FC = () => {
    const [cityData, setCityData] = useState<CityData>({
        cityname: '',
        description: '',
        cityImage: null,
        hotels: [],
    });

    const handleCityInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCityData({ ...cityData, [name]: value });
    };

    const handleCityImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setCityData({ ...cityData, cityImage: file });
    };

    const handleHotelInputChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedHotels = [...cityData.hotels];
        updatedHotels[index] = { ...updatedHotels[index], [name]: value };
        setCityData({ ...cityData, hotels: updatedHotels });
    };

    const handleHotelImagesChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        const updatedHotels = [...cityData.hotels];
        updatedHotels[index].hotelImages = files;
        setCityData({ ...cityData, hotels: updatedHotels });
    };

    const addHotel = () => {
        setCityData({
            ...cityData,
            hotels: [...cityData.hotels, { 
                hotelname: '', 
                nightpackage: '', 
                price: '', 
                address: '', 
                departure: '', // Initialize new field
                arrival: '', // Initialize new field
                hotelImages: [] 
            }],
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cityname', cityData.cityname);

        if (cityData.description) {
            formData.append('description', cityData.description);
        }

        if (cityData.cityImage) {
            formData.append('cityImage', cityData.cityImage);
        }

        cityData.hotels.forEach((hotel, index) => {
            formData.append(`hotels[${index}][hotelname]`, hotel.hotelname);
            formData.append(`hotels[${index}][nightpackage]`, hotel.nightpackage);
            formData.append(`hotels[${index}][price]`, hotel.price);
            formData.append(`hotels[${index}][address]`, hotel.address);
            formData.append(`hotels[${index}][departure]`, hotel.departure); // Append departure
            formData.append(`hotels[${index}][arrival]`, hotel.arrival); // Append arrival

            hotel.hotelImages.forEach((image) => {
                formData.append(`hotelImages`, image);
            });
        });

        try {
            const response = await fetch('http://localhost:3002/cities', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload city data');
            }

            const data = await response.json();
            console.log('City uploaded successfully:', data);
            alert('City and Hotels uploaded successfully!');
        } catch (error) {
            console.error(error);
            alert('An error occurred while uploading city data');
        }
    };

    return (
        <div>
            <h1>Upload City and Hotels</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City Name:</label>
                    <input type="text" name="cityname" value={cityData.cityname} onChange={handleCityInputChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={cityData.description} onChange={handleCityInputChange} />
                </div>
                <div>
                    <label>City Image:</label>
                    <input type="file" accept="image/*" onChange={handleCityImageChange} />
                </div>

                <h2>Hotels</h2>
                {cityData.hotels.map((hotel, index) => (
                    <div key={index}>
                        <h3>Hotel {index + 1}</h3>
                        <div>
                            <label>Hotel Name:</label>
                            <input type="text" name="hotelname" value={hotel.hotelname} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Night Package:</label>
                            <input type="text" name="nightpackage" value={hotel.nightpackage} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input type="text" name="price" value={hotel.price} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input type="text" name="address" value={hotel.address} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Departure:</label>
                            <input type="text" name="departure" value={hotel.departure} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Arrival:</label>
                            <input type="text" name="arrival" value={hotel.arrival} onChange={(e) => handleHotelInputChange(index, e)} required />
                        </div>
                        <div>
                            <label>Hotel Images:</label>
                            <input type="file" accept="image/*" multiple onChange={(e) => handleHotelImagesChange(index, e)} required />
                        </div>
                    </div>
                ))}
                <button type="button" onClick={addHotel}>
                    Add Hotel
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CityUpload;


