import React, { useEffect, useState } from 'react';
import './carousel.css';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      image: 'https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045_1280.jpg',
      caption: 'Delicious pasta with sauce and cheese.',
      title: 'Pasta Dish',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/06/04/01/49/asian-6308471_1280.jpg',
      caption: 'Delicious pasta with sauce and cheese.',
      title: 'Pasta Dish',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg',
      caption: 'Delicious pasta with sauce and cheese.',
      title: 'Pasta Dish',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change the interval as needed (milliseconds)
    
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleViewClick = (index) => {
    // Handle view button click, for example, redirect to a detailed view of the item.
    console.log("View button clicked for item at index:", index);
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeIndex ? 'active' : ''}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Recipe ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''} c-item`}>
            <img src={item.image} className="d-block w-100 c-img" alt={item.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.caption}</p>
              <button className="btn btn-primary" onClick={() => handleViewClick(index)}>View</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
