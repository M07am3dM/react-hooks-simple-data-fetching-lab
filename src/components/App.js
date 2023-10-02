// App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update state with the dog image URL
        setLoading(false); // Set loading to false once the image is fetched
      })
      .catch((error) => console.error(error));
    // const fetchDogImage = async () => {
    //     try {
    //       const response = await fetch('https://dog.ceo/api/breeds/image/random');
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setDogImage(data.message);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error('Error fetching dog image:', error);
    //     }
    //   };
  
    //   fetchDogImage();
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
