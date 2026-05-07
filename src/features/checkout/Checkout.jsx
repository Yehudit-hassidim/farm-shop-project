import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../cart/cartSlice';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems || []);
    
    // חישוב סכום הקנייה
    const totalOrder = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const [formData, setFormData] = useState({
        fullName: '', address: '', phone: '', cardNumber: '',
        expMonth: '', expYear: '', cvv: '', comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (cartItems.length === 0) {
            alert("העגלה ריקה!");
            return;
        }

        const orderNumber = Math.floor(10000 + Math.random() * 90000);
        
        alert(`הזמנה מס' ${orderNumber} בוצעה בהצלחה! סה"כ לתשלום: ₪${totalOrder}. אישור נשלח למייל.`);
        
        dispatch(clearCart()); // ניקוי עגלה
        navigate('/'); // חזרה לדף הבית
    };

    return (
        <div className="checkout-container">
            <div className="checkout-card">
                <h2 className="checkout-title">💳 תשלום ופרטי משלוח</h2>
                
                <div className="order-summary-box">
                    <h3>סיכום הזמנה</h3>
                    <p>סה"כ לתשלום: <strong>₪{totalOrder}</strong></p>
                </div>

                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h4>פרטי משלוח</h4>
                        <div className="form-group">
                            <label>שם מלא</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>כתובת מלאה</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>טלפון</label>
                            <input type="tel" name="phone" pattern="[0-9]*" value={formData.phone} onChange={handleChange} required placeholder="מספרים בלבד" />
                        </div>
                    </div>

                    <div className="form-section">
                        <h4>פרטי תשלום</h4>
                        <div className="form-group">
                            <label>מספר כרטיס</label>
                            <input type="text" name="cardNumber" pattern="\d{16}" maxLength="16" value={formData.cardNumber} onChange={handleChange} required placeholder="16 ספרות" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>חודש (MM)</label>
                                <input type="text" name="expMonth" pattern="(0[1-9]|1[0-2])" maxLength="2" value={formData.expMonth} onChange={handleChange} required placeholder="01-12" />
                            </div>
                            <div className="form-group">
                                <label>שנה (YY)</label>
                                <input type="text" name="expYear" pattern="\d{2}" maxLength="2" value={formData.expYear} onChange={handleChange} required placeholder="24" />
                            </div>
                            <div className="form-group">
                                <label>CVV</label>
                                <input type="text" name="cvv" pattern="\d{3}" maxLength="3" value={formData.cvv} onChange={handleChange} required placeholder="3 ספרות" />
                            </div>
                        </div>
                    </div>

                    <div className="checkout-actions">
                        <button type="button" className="btn-back" onClick={() => navigate(-1)}>חזרה</button>
                        <button type="submit" className="btn-pay" disabled={cartItems.length === 0}>
                            אישור וביצוע תשלום (₪{totalOrder})
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;