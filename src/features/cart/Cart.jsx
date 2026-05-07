import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from './cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // מצב לפתיחת הפופ-אפ ומידע על המוצר הנבחר
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const totalOrder = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page-container">
      <div className="cart-main-card">
        <h2 className="cart-title">עגלת קניות 🛒</h2>

        {cartItems.length === 0 ? (
          <div className="cart-empty-message">
            <p>העגלה שלך ריקה כרגע.</p>
            <button onClick={() => navigate('/products/all')} className="btn-secondary">חזרה לחנות</button>
          </div>
        ) : (
          <div className="cart-content-rtl">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>תמונה</th>
                  <th>שם המוצר</th>
                  <th>כמות</th>
                  <th>סה"כ</th>
                  <th>אפשרויות</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="cart-mini-img" 
                        onClick={() => openModal(item)} 
                        style={{cursor: 'pointer'}} 
                      />
                    </td>
                    <td onClick={() => openModal(item)} style={{cursor: 'pointer', color: '#0f5b39', fontWeight: 'bold'}}>
                      {item.name}
                    </td>
                    <td className="quantity-cell">
                      <button className="qty-btn" onClick={() => dispatch(updateQuantity({id: item.id, amount: -1}))}>-</button>
                      <span className="qty-num">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => dispatch(updateQuantity({id: item.id, amount: 1}))}>+</button>
                    </td>
                    <td className="item-total-price">₪{item.price * item.quantity}</td>
                    <td>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="btn-remove-text">הסר</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="cart-summary-footer">
              <h3 className="total-amount-text">סה"כ להזמנה: ₪{totalOrder}</h3>
              <div className="cart-action-btns">
                <button onClick={() => navigate('/products/all')} className="btn-secondary">חזרה לרשימת מוצרים</button>
                <button className="btn-primary" onClick={() => navigate('/checkout')}>מעבר לתשלום</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* פופ-אפ מותאם אישית (בלי MUI) */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">{selectedProduct?.name}</h2>
            <img src={selectedProduct?.image} alt={selectedProduct?.name} className="modal-image" />
            <div className="modal-details">
              <p><strong>מחיר:</strong> ₪{selectedProduct?.price}</p>
              <p><strong>תיאור:</strong> {selectedProduct?.description || "מוצר איכותי שנבחר בקפידה עבורכם."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;