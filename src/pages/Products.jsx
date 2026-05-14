import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

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
    }, []); // Secondo argomento vuoto

    // Creo nuovo componente Card e lo renderizzo qui


    if (loading) return <div>Caricamento in corso...</div>;
    if (error) return <div>Si è verificato un errore: {error}</div>;

    return (
        <ul>
            {products.map(product => {
                return (
                    <Link to="*" key={product.id}>
                        <li>
                            <div className="product-img img-fluid ">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-textbox">
                                <h1>{product.title}</h1>
                                <h5>{product.price}</h5>
                                <p>{product.description}</p>
                            </div>
                            <div className="product-stats d-flex">
                                <div>{product.category}</div>
                                <div>
                                    <p>{product.rating.rate}</p>
                                    <p>{product.rating.count}</p>
                                </div>
                            </div>

                        </li>
                    </Link>)
            })}
        </ul>
    );
}

export default Products;

{/* "id": 1, 
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
    "price": 109.95, "description": "Your perfect pack for everyday use and walks 
    in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
    "category": "men's clothing", 
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png", 
    "rating": { "rate": 3.9, "count": 120 } */ }