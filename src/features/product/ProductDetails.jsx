import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice'; 
import './ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const products = useSelector((state) => state.products.items || state.products);
  const product = products?.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="details-page-wrapper">
        <div className="loader">טוען נתוני מוצר...</div>
        <button className="nav-back-button" onClick={() => navigate(-1)}>חזרה</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: Number(quantity) }));
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  return (
    <div className="details-page-wrapper">
      <button className="nav-back-button" onClick={() => navigate(-1)}>
        חזרה ➡️
      </button>

      <div className="details-card">
        <div className="details-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="details-price">₪{product.price}</p>
          
          {/* רשימת יתרונות במקום תיאור - נראה הרבה יותר מקצועי */}
          <div className="product-features-list">
            <p>✅ משלוח מהיר ומבוטח עד הבית</p>
            <p>✅ ייעוץ מקצועי חינם על גידול החיה</p>
            <p>✅ אחריות מלאה על בריאות החיה</p>
          </div>
          
          <div className="details-qty">
            <label>כמות:</label>
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} 
              className="qty-input-field"
            />
          </div>

          <button className="btn-add-to-cart-green" onClick={handleAddToCart}>
             הוסף לסל הקניות 🛒
          </button>

          {addedMessage && (
            <div className="added-success-msg">
              ✅ המוצר התווסף לסל! 
              <Link to="/cart" className="go-to-cart-link"> למעבר לסל הקניות</Link>
            </div>
          )}
        </div>

        <div className="details-image">
          <img src={product.image} alt={product.name} className="main-product-img" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;