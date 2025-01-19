
// // export default CruiseUploadPage;
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { FormControl, InputLabel, Select, MenuItem, Button, Box, Typography, Card, CardContent, CircularProgress, TextField } from '@mui/material';

// const CruiseUploadPage: React.FC = () => {
//     const [month, setMonth] = useState('');
//     const [cruisename, setCruisename] = useState('');
//     const [destinations, setDestinations] = useState('');
//     const [nights, setNights] = useState('');
//     const [date, setDate] = useState('');
//     const [images, setImages] = useState<File[]>([]);
//     const [cruiseImage, setCruiseImages] = useState<File[]>([]);
    
//     // Loading states for each button
//     const [uploadLoading, setUploadLoading] = useState(false);
//     const [deleteAllLoading, setDeleteAllLoading] = useState(false);
//     const [deleteLoading, setDeleteLoading] = useState(false);

//     const [uploadMessage, setUploadMessage] = useState('');
//     const [deleteAllMessage, setDeleteAllMessage] = useState('');
//     const [deleteMessage, setDeleteMessage] = useState('');

//     // New states for delete section
//     const [deleteMonth, setDeleteMonth] = useState('');
//     const [deleteDate, setDeleteDate] = useState('');

//     const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setImages(Array.from(e.target.files));
//         }
//     };

//     const handleCruiseChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setCruiseImages(Array.from(e.target.files));
//         }
//     };

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         setUploadLoading(true);
//         setUploadMessage('');

//         const formData = new FormData();
//         formData.append('month', month);
//         formData.append('cruisename', cruisename);
//         formData.append('destinations', destinations);
//         formData.append('nights', nights);
//         formData.append('date', date);

//         images.forEach((image) => formData.append('images', image));
//         cruiseImage.forEach((image) => formData.append('mainImage', image));

//         try {
//             const response = await fetch('http://localhost:3002/cruise', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 setUploadMessage('Cruise uploaded successfully!');
//             } else {
//                 const errorData = await response.json();
//                 setUploadMessage(`Error: ${errorData.message || 'Unknown error'}`);
//             }
//         } catch (error) {
//             setUploadMessage('Error uploading cruise data');
//         } finally {
//             setUploadLoading(false);
//         }
//     };

//     const handleDeleteAllCruises = async (e: FormEvent) => {
//         e.preventDefault();
//         setDeleteAllLoading(true);
//         setDeleteAllMessage('');

//         try {
//             const response = await fetch(`http://localhost:3002/cruise/${deleteMonth}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 setDeleteAllMessage('All cruises deleted successfully for the selected month!');
//             } else {
//                 const errorData = await response.json();
//                 setDeleteAllMessage(`Error: ${errorData.message}`);
//             }
//         } catch (error) {
//             setDeleteAllMessage('Error deleting cruises');
//         } finally {
//             setDeleteAllLoading(false);
//         }
//     };

//     const handleDeleteCruise = async (e: FormEvent) => {
//         e.preventDefault();
//         setDeleteLoading(true);
//         setDeleteMessage('');

//         try {
//             const response = await fetch(`http://localhost:3002/cruise/${deleteMonth}/${deleteDate}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 setDeleteMessage('Cruise deleted successfully!');
//             } else {
//                 const errorData = await response.json();
//                 setDeleteMessage(`Error: ${errorData.message}`);
//             }
//         } catch (error) {
//             setDeleteMessage('Error deleting cruise');
//         } finally {
//             setDeleteLoading(false);
//         }
//     };

//     return (
//         <Box sx={{ padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
//             <Typography variant="h3" gutterBottom textAlign="center" color="primary">Cruise Upload</Typography>

//             <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
//                 <CardContent>
//                     <Typography variant="h6" gutterBottom>Upload Cruise</Typography>
//                     <form onSubmit={handleSubmit}>
//                         <FormControl fullWidth required sx={{ marginBottom: 2 }}>
//                             <InputLabel>Month</InputLabel>
//                             <Select value={month} onChange={(e) => setMonth(e.target.value)} fullWidth>
//                                 {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                                     <MenuItem key={index} value={month}>{month}</MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>

//                         <FormControl fullWidth required sx={{ marginBottom: 2 }}>
//                             <InputLabel>Cruise Name</InputLabel>
//                             <Select value={cruisename} onChange={(e) => setCruisename(e.target.value)} fullWidth>
//                                 {['MSC', 'Royal Caribbean'].map((cruise, index) => (
//                                     <MenuItem key={index} value={cruise}>{cruise}</MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Destinations"
//                             value={destinations}
//                             onChange={(e) => setDestinations(e.target.value)}
//                             required
//                             fullWidth
//                             sx={{ marginBottom: 2 }}
//                         />

//                         <FormControl fullWidth required sx={{ marginBottom: 2 }}>
//                             <InputLabel>Nights</InputLabel>
//                             <Select value={nights} onChange={(e) => setNights(e.target.value)} fullWidth>
//                                 {[...Array(12)].map((_, index) => {
//                                     const nightCount = index + 1;
//                                     return (
//                                         <MenuItem key={nightCount} value={`${nightCount} Nights`}>
//                                             {nightCount} Night{nightCount > 1 ? 's' : ''}
//                                         </MenuItem>
//                                     );
//                                 })}
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Date"
//                             type="date"
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                             required
//                             fullWidth
//                             sx={{ marginBottom: 2 }}
//                         />

//                         <Box  sx={{ marginBottom: 2, display:"flex"}}>
//                             <Typography>Upload Cruise Image:</Typography>
//                             <input type="file" onChange={handleCruiseChange} accept="image/*" />
//                             <Typography>Upload Cruise Images:</Typography>
//                             <input type="file" multiple onChange={handleImageChange} accept="image/*" />
//                         </Box>

//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             sx={{ padding: 1, fontSize: 16 }}
//                             disabled={uploadLoading}
//                         >
//                             {uploadLoading ? <CircularProgress size={24} /> : 'Upload Cruise'}
//                         </Button>
//                     </form>

//                     {uploadMessage && <Typography variant="body1" color={uploadMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{uploadMessage}</Typography>}
//                 </CardContent>
//             </Card>

//             <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
//                 <CardContent>
//                     <Typography variant="h6" gutterBottom>Delete All Cruises for a Month</Typography>
//                     <form onSubmit={handleDeleteAllCruises}>
//                         <FormControl fullWidth required sx={{ marginBottom: 2 }}>
//                             <InputLabel>Month</InputLabel>
//                             <Select value={deleteMonth} onChange={(e) => setDeleteMonth(e.target.value)} fullWidth>
//                                 {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                                     <MenuItem key={index} value={month}>{month}</MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>

//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="secondary"
//                             fullWidth
//                             sx={{ padding: 1, fontSize: 16 }}
//                             disabled={deleteAllLoading}
//                         >
//                             {deleteAllLoading ? <CircularProgress size={24} /> : 'Delete All Cruises'}
//                         </Button>
//                     </form>

//                     {deleteAllMessage && <Typography variant="body1" color={deleteAllMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{deleteAllMessage}</Typography>}
//                 </CardContent>
//             </Card>

//             <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
//                 <CardContent>
//                     <Typography variant="h6" gutterBottom>Delete Specific Cruise</Typography>
//                     <form onSubmit={handleDeleteCruise}>
//                         <FormControl fullWidth required sx={{ marginBottom: 2 }}>
//                             <InputLabel>Month</InputLabel>
//                             <Select value={deleteMonth} onChange={(e) => setDeleteMonth(e.target.value)} fullWidth>
//                                 {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                                     <MenuItem key={index} value={month}>{month}</MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Date"
//                             type="date"
//                             value={deleteDate}
//                             onChange={(e) => setDeleteDate(e.target.value)}
//                             required
//                             fullWidth
//                             sx={{ marginBottom: 2 }}
//                         />

//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="error"
//                             fullWidth
//                             sx={{ padding: 1, fontSize: 16 }}
//                             disabled={deleteLoading}
//                         >
//                             {deleteLoading ? <CircularProgress size={24} /> : 'Delete Cruise'}
//                         </Button>
//                     </form>

//                     {deleteMessage && <Typography variant="body1" color={deleteMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{deleteMessage}</Typography>}
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default CruiseUploadPage;

// export default CruiseUploadPage;
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box, Typography, Card, CardContent, CircularProgress, TextField } from '@mui/material';

const CruiseUploadPage: React.FC = () => {
    const [month, setMonth] = useState('');
    const [cruisename, setCruisename] = useState('');
    const [destinations, setDestinations] = useState('');
    const [nights, setNights] = useState('');
    const [date, setDate] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [cruiseImage, setCruiseImages] = useState<File[]>([]);
    
    // Loading states for each button
    const [uploadLoading, setUploadLoading] = useState(false);
    const [deleteAllLoading, setDeleteAllLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const [uploadMessage, setUploadMessage] = useState('');
    const [deleteAllMessage, setDeleteAllMessage] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    // New states for delete section
    const [deleteMonth, setDeleteMonth] = useState('');
    const [deleteDate, setDeleteDate] = useState('');

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files));
        }
    };

    const handleCruiseChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setCruiseImages(Array.from(e.target.files));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setUploadLoading(true);
        setUploadMessage('');

        const formData = new FormData();
        formData.append('month', month);
        formData.append('cruisename', cruisename);
        formData.append('destinations', destinations);
        formData.append('nights', nights);
        formData.append('date', date);

        images.forEach((image) => formData.append('images', image));
        cruiseImage.forEach((image) => formData.append('mainImage', image));

        try {
            const response = await fetch('https://yanyana-c668fa5fd9ac.herokuapp.com/cruise', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadMessage('Cruise uploaded successfully!');
            } else {
                const errorData = await response.json();
                setUploadMessage(`Error: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setUploadMessage('Error uploading cruise data');
        } finally {
            setUploadLoading(false);
        }
    };

    const handleDeleteAllCruises = async (e: FormEvent) => {
        e.preventDefault();
        setDeleteAllLoading(true);
        setDeleteAllMessage('');

        try {
            const response = await fetch(`https://yanyana-c668fa5fd9ac.herokuapp.com/cruise/${deleteMonth}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setDeleteAllMessage('All cruises deleted successfully for the selected month!');
            } else {
                const errorData = await response.json();
                setDeleteAllMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setDeleteAllMessage('Error deleting cruises');
        } finally {
            setDeleteAllLoading(false);
        }
    };

    const handleDeleteCruise = async (e: FormEvent) => {
        e.preventDefault();
        setDeleteLoading(true);
        setDeleteMessage('');

        try {
            const response = await fetch(`https://yanyana-c668fa5fd9ac.herokuapp.com/cruise/${deleteMonth}/${deleteDate}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setDeleteMessage('Cruise deleted successfully!');
            } else {
                const errorData = await response.json();
                setDeleteMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setDeleteMessage('Error deleting cruise');
        } finally {
            setDeleteLoading(false);
        }
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <Typography variant="h3" gutterBottom textAlign="center" color="primary">Cruise Upload</Typography>

            <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Upload Cruise</Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                            <InputLabel>Month</InputLabel>
                            <Select value={month} onChange={(e) => setMonth(e.target.value)} fullWidth>
                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                    <MenuItem key={index} value={month}>{month}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                            <InputLabel>Cruise Name</InputLabel>
                            <Select value={cruisename} onChange={(e) => setCruisename(e.target.value)} fullWidth>
                                {['MSC', 'Royal Caribbean'].map((cruise, index) => (
                                    <MenuItem key={index} value={cruise}>{cruise}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Destinations"
                            value={destinations}
                            onChange={(e) => setDestinations(e.target.value)}
                            required
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                            <InputLabel>Nights</InputLabel>
                            <Select value={nights} onChange={(e) => setNights(e.target.value)} fullWidth>
                                {[...Array(12)].map((_, index) => {
                                    const nightCount = index + 1;
                                    return (
                                        <MenuItem key={nightCount} value={`${nightCount} Nights`}>
                                            {nightCount} Night{nightCount > 1 ? 's' : ''}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <Box  sx={{ marginBottom: 2, display:"flex"}}>
                            <Typography>Upload Cruise Image:</Typography>
                            <input type="file" onChange={handleCruiseChange} accept="image/*" />
                            <Typography>Upload Cruise Images:</Typography>
                            <input type="file" multiple onChange={handleImageChange} accept="image/*" />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ padding: 1, fontSize: 16 }}
                            disabled={uploadLoading}
                        >
                            {uploadLoading ? <CircularProgress size={24} /> : 'Upload Cruise'}
                        </Button>
                    </form>

                    {uploadMessage && <Typography variant="body1" color={uploadMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{uploadMessage}</Typography>}
                </CardContent>
            </Card>

            <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Delete All Cruises for a Month</Typography>
                    <form onSubmit={handleDeleteAllCruises}>
                        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                            <InputLabel>Month</InputLabel>
                            <Select value={deleteMonth} onChange={(e) => setDeleteMonth(e.target.value)} fullWidth>
                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                    <MenuItem key={index} value={month}>{month}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                            sx={{ padding: 1, fontSize: 16 }}
                            disabled={deleteAllLoading}
                        >
                            {deleteAllLoading ? <CircularProgress size={24} /> : 'Delete All Cruises'}
                        </Button>
                    </form>

                    {deleteAllMessage && <Typography variant="body1" color={deleteAllMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{deleteAllMessage}</Typography>}
                </CardContent>
            </Card>

            <Card sx={{ marginBottom: 4, padding: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Delete Specific Cruise</Typography>
                    <form onSubmit={handleDeleteCruise}>
                        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                            <InputLabel>Month</InputLabel>
                            <Select value={deleteMonth} onChange={(e) => setDeleteMonth(e.target.value)} fullWidth>
                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                    <MenuItem key={index} value={month}>{month}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Date"
                            type="date"
                            value={deleteDate}
                            onChange={(e) => setDeleteDate(e.target.value)}
                            required
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                            fullWidth
                            sx={{ padding: 1, fontSize: 16 }}
                            disabled={deleteLoading}
                        >
                            {deleteLoading ? <CircularProgress size={24} /> : 'Delete Cruise'}
                        </Button>
                    </form>

                    {deleteMessage && <Typography variant="body1" color={deleteMessage.startsWith('Error') ? 'error' : 'primary'} sx={{ marginTop: 2 }}>{deleteMessage}</Typography>}
                </CardContent>
            </Card>
        </Box>
    );
};

export default CruiseUploadPage;
