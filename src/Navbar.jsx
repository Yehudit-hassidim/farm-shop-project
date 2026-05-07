import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#0f5b39' }}>
      <div style={{ 
        display: 'flex', 
        gap: '25px', 
        padding: '12px 40px', 
        borderRadius: '50px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // הוספתי רקע קל כדי שיבלוט
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
      }}>
        <Link to="/" style={linkStyle}>דף הבית</Link>
        
        {/* הוספת קטגוריות המוצרים */}
        <Link to="/products/all" style={linkStyle}>כל המוצרים</Link>
        <Link to="/products/farm" style={linkStyle}>חיות משק</Link>
        <Link to="/products/birds" style={linkStyle}>ציפורים</Link>
        <Link to="/products/fish" style={linkStyle}>דגים</Link>
        <Link to="/products/rodents" style={linkStyle}>מכרסמים</Link>
        
        <Link to="/about" style={linkStyle}>אודות</Link>
        <Link to="/cart" style={linkStyle}>סל קניות</Link>
        <Link to="/contact" style={linkStyle}>צור קשר</Link>
      </div>
    </nav>
  );
};

export default Navbar;