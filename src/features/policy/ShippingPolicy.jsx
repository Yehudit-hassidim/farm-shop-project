import React from 'react';
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1>מדיניות משלוחים ואספקה</h1>
        <p>חשוב לנו שההזמנה שלכם תגיע במהירות ובבטחה</p>
      </header>

      <div className="policy-grid">
        <div className="policy-card">
          <div className="icon">🚚</div>
          <h3>זמני אספקה</h3>
          <p>משלוחים לכל חלקי הארץ מגיעים בתוך 3-5 ימי עסקים.</p>
          <p className="small">אזורי קצה: עד 7 ימי עסקים.</p>
        </div>

        <div className="policy-card">
          <div className="icon">💰</div>
          <h3>עלויות משלוח</h3>
          <p className="highlight">כל המשלוחים חינם!</p>
        </div>

        <div className="policy-card">
          <div className="icon">📍</div>
          <h3>איסוף עצמי</h3>
          <p>ניתן לאסוף את ההזמנה מהחווה שלנו בתיאום מראש.</p>
          <p className="small">שעות פעילות האיסוף: א'-ה' 09:00-18:00</p>
        </div>

        <div className="policy-card">
          <div className="icon">📱</div>
          <h3>מעקב הזמנות</h3>
          <p>עם יציאת המשלוח, תקבלו הודעת SMS עם קישור למעקב אחר החבילה.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;