import { useState, useEffect } from 'react';

export default function useData(url, defaultValue = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
            }).catch((error) => {
                console.error('Error:', error);
                setData(defaultValue);
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, loading };
}