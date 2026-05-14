import { useState } from "react";
import { useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div>Products</div>
    );
}
export default Products