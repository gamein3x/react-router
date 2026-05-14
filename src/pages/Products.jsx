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

                return response.json();
            }
            ).then((data) => {
                setLoading(false);
                setProducts(data);
            }
            ).catch((error) => {
                // Gestione degli errori
                setError(error.message);
            }
            ).finally(() => {
                setLoading(false);
            });
    });

    return (
        <div>Products</div>
    );
}
export default Products