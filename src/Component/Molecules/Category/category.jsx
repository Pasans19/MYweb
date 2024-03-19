import React from 'react';
import './category.css';

const Category = () => {
  return (
    <div className="creative-design-container">
      <div className="image-wrapper">
        <img src='https://cdn.pixabay.com/photo/2022/03/19/12/33/side-dish-7078451_960_720.jpg' alt="Food" />
        <div className="overlay">
          <h3 className="overlay-text">Delicious Creations</h3>
          <p className="overlay-description">Explore our creative culinary delights!</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src='https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_1280.jpg' alt="Food" />
        <div className="overlay">
          <h3 className="overlay-text">Artistic Flavors</h3>
          <p className="overlay-description">Discover the artistry in every dish.</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src='https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Food" />
        <div className="overlay">
          <h3 className="overlay-text">Artistic Flavors</h3>
          <p className="overlay-description">Discover the artistry in every dish.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
