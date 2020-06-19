import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Album: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const data = await response.data.slice(1, 10);
      setPhotos(data);
    };
    fetchPhotos();
  }, []);
  return (
    <section>
      {photos.map((photo: PhotoType) => (
        <img
          style={{ width: 100, height: 100 }}
          key={photo.id}
          src={photo.url}
        />
      ))}
    </section>
  );
};

export default Album;
