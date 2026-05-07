import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">הסיפור שלנו 🐾</h1>
        <p className="about-subtitle">מעל 30 שנה של אהבה ומסירות לבעלי חיים</p>
        
        <div className="about-divider" />

        <div className="about-content-grid">
          <section className="about-section">
            <h3>מי אנחנו?</h3>
            <p>
              חנות החיות שלנו הוקמה כעסק משפחתי קטן מתוך אהבה טהורה לכל יצור על ארבע, כנף או סנפיר. 
              מה שהתחיל כחנות שכונתית קטנה הפך עם השנים לבית עבור אלפי בעלי חיים ובעליהם.
            </p>
          </section>

          <section className="about-section">
            <h3>החזון שלנו</h3>
            <p>
              אנחנו מאמינים שחיית מחמד היא לא "רק חיה" – היא חלק בלתי נפרד מהמשפחה. 
              לכן, אנחנו מתחייבים לספק רק את המוצרים האיכותיים ביותר, המזון המזין ביותר והשירות המקצועי ביותר.
            </p>
          </section>
        </div>

        <div className="about-footer">
          <p>תודה שבחרתם בנו להיות חלק מהמסע שלכם עם החבר הכי טוב! ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default About;