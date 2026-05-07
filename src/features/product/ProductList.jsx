import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from './productSlice'; 
import './ProductList.css';

const ProductList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const allProducts = useSelector((state) => state.products.items);

  useEffect(() => {
    if (allProducts.length === 0) {
      fetch('http://localhost:5000/products')
        .then(res => {
          if (!res.ok) throw new Error('Network error');
          return res.json();
        })
        .then(data => dispatch(setProducts(data)))
        .catch(err => console.error("Error fetching products:", err));
    }
  }, [dispatch, allProducts.length]);

  const filteredProducts = categoryName === 'all' || !categoryName
    ? allProducts 
    : allProducts.filter((item) => item.category === categoryName);

  if (allProducts.length === 0) {
    return <div className="product-list-container">טוען מוצרים מהשרת...</div>;
  }

  return (
    <div className="product-list-container">
      
      {/* מבנה Header חדש למרכוז הכותרת */}
      <div className="container-header">
        <div className="back-button-wrapper">
          <button className="btn-back-oval" onClick={() => navigate(-1)}>
            <span>חזרה</span>
            <span className="back-icon">➡️</span>
          </button>
        </div>

        <h2 className="category-title">
          {categoryName === 'all' || !categoryName ? 'כל המוצרים שלנו' : `${categoryName}`}
        </h2>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₪{product.price}</p>
            <Link to={`/product/${product.id}`} className="details-link">
              לפרטים נוספים
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;