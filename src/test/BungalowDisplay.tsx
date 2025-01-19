import React, { useEffect, useState } from 'react';

interface Bungalow {
    location: string;
    capacity: string;
    bungalowImages: string[];
}

const BungalowDisplay: React.FC = () => {
    const [bungalows, setBungalows] = useState<Bungalow[]>([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState<string | null>(null); // For error state

    useEffect(() => {
        const fetchBungalows = async () => {
            try {
                const response = await fetch('http://localhost:3002/bungalows');
                if (!response.ok) {
                    throw new Error('Failed to fetch bungalows');
                }
                const result = await response.json();

                if (Array.isArray(result)) {
                    setBungalows(result);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error: unknown) {
                setError((error as Error).message);
                console.error('Error fetching bungalows:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBungalows();
    }, []);

    if (loading) {
        return <p>Loading bungalows...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (bungalows.length === 0) {
        return <p>No bungalows available.</p>;
    }

    return (
        <div>
            <h1>Bungalow List</h1>
            {bungalows.map((bungalow, index) => (
                <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h2>Location: {bungalow.location}</h2>
                    <p>Capacity: {bungalow.capacity}</p>
                    <div>
                        <h3>Images:</h3>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {bungalow.bungalowImages.map((imageUrl, idx) => (
                                <img
                                    key={idx}
                                    src={imageUrl}
                                    alt={`Bungalow ${index} Image ${idx}`}
                                    style={{ width: '200px', height: 'auto', margin: '10px' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BungalowDisplay;
