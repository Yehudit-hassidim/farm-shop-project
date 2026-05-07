import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './features/product/productSlice';
import RouterApp from './RouterApp';

const App = () => {
  const dispatch = useDispatch();
  console.log("App component rendered")

  useEffect(() => {
    // שליפה מהפורט שבו השרת באמת רץ
    fetch('http://localhost:5000/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => dispatch(setProducts(data)))
      .catch(err => console.error("Fetch error:", err));
  }, [dispatch]);

  return <RouterApp />;
};

export default App;