import { useState } from "react";
import { useEffect } from "react";

const API_URL = 'https://fakestoreapi.com/products';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(API_URL)
            // Invio errore con throw se la fetch fallisce
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Errore HTTP! Stato: ${response.status}`);
                }
                console.log('Risposta');
                return response.json();
            }
            ).then((data) => {
                setLoading(false);
                setProducts(data);
                console.log('Data');
            }
            ).catch((error) => {
                // Gestione degli errori
                setError(error.message);
            }
            ).finally(() => {
                setLoading(false);
                console.log('Loading completo');
            });
    }, []);

    if (loading) return <div>Caricamento in corso...</div>;
    if (error) return <div>Si è verificato un errore: {error}</div>;

    return (
        <div><h1>Products</h1></div>
    );
}
export default Products;