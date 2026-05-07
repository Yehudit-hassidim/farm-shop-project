import React from 'react';

const Contact = () => {
  const cardStyle = { padding: '40px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#2c3e50' }}>צור קשר</h2>
      <p>טלפון: 050-1285561 | אימייל: petshop@gmail.com</p>
      <p>כתובת: רחוב הזית 2 , מושב נשר</p>
    </div>
  );
};

export default Contact;