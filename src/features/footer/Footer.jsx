import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setStatus('כתובת המייל אינה תקינה');
      return;
    }

    setStatus('תודה! נרשמת בהצלחה.');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section newsletter">
          <h3>רשימת תפוצה</h3>
          <p>הירשמו עכשיו ותוכלו ליהנות מהטבות בלעדיות!</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="text" 
              placeholder="email@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">שלח</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>

        <div className="footer-section links">
          <h3>אתר</h3>
          <ul>
            <li><Link to="/contact">צור קשר</Link></li>
            <li>בלוג</li>
            <li><Link to="/products/all">חנות</Link></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>מידע</h3>
          <ul>
            <li><Link to="/about">אודותינו</Link></li>
            {/* הקישור החדש שלך */}
            <li><Link to="/shipping-policy">מדיניות משלוחים</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>שירות לקוחות</h3>
          <p><strong>א' - ה':</strong> 08:30 - 20:00</p>
          <p className="phone">1-700-700-150</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">© 2026 כל הזכויות שמורות לחווה שלנו</div>
      </div>
    </footer>
  );
};

export default Footer;