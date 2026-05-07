import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      {/* וידאו רקע */}
{/* <video autoPlay loop muted playsInline className="background-video">
  <source src="/nature-video.mp4" type="video/mp4" />
</video> */}
<img src="/images/village.jpg" alt="רקע כפר" className="background-video" />

      {/* שכבת התוכן */}
      <div className="content-overlay">
        
        <h1 className="welcome-title">ברוכים הבאים לחווה שלנו</h1>

        <div className="category-circles">
          
          {/* מכרסמים */}
          <div className="circle-item rodent">
            <div className="animal-img-container">
              <img src="/images/Rodents.jpg" alt="מכרסמים" />
            </div>
            <div className="circle-text-box">
              <h3>מכרסמים</h3>
              <Link to="/products/rodents" className="buy-btn-small">התחילו לרכוש</Link>
            </div>
          </div>

          {/* דגים */}
          <div className="circle-item fish">
            <div className="animal-img-container">
              <img src="/images/1.jpg" alt="דגים" />
            </div>
            <div className="circle-text-box">
              <h3>דגים</h3>
              <Link to="/products/fish" className="buy-btn-small">התחילו לרכוש</Link>
            </div>
          </div>

          {/* ציפורים */}
          <div className="circle-item bird">
            <div className="animal-img-container">
              <img src="/images/Bird.jpg" alt="ציפורים" />
            </div>
            <div className="circle-text-box">
              <h3>ציפורים</h3>
              <Link to="/products/birds" className="buy-btn-small">התחילו לרכוש</Link>
            </div>
          </div>

          {/* חיות משק */}
          <div className="circle-item farm">
            <div className="animal-img-container">
              <img src="/images/Farm animals.jpg" alt="חיות משק" />
            </div>
            <div className="circle-text-box">
              <h3>חיות משק</h3>
              <Link to="/products/farm" className="buy-btn-small">התחילו לרכוש</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;