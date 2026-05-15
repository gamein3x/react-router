import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

function ProductDetail() {
    const { id, title } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
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
                console.log('Data');
                setProduct(data);
                setLoading(false);
            }
            ).catch((error) => {
                // Gestione degli errori
                setError(error.message);
            }
            ).finally(() => {
                console.log('Loading completo');
            });
}, [id]);

if (loading) return <div>Caricamento in corso...</div>;

if (!product) return <div>Prodotto non trovato.</div>;

return (
        <ul>
            <li>
                <h4>{product.title}</h4>
                <img src={product.image} alt={product.id} />
                <p>{product.description}</p>
            </li>
        </ul>
    );
}

export default ProductDetail;