import React, { useState } from 'react';
import './post.css';

const BlogPost = ({ title, author, date, content, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`blog-post ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Blog Post" className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <div className="post-content">
          <p>
            {content} This CSS will ensure that the image is aligned to the left and all content starts from the left
            side. Adjust the max-width and margins as needed to fit your design preferences.
          </p>
        </div>
        <div className="post-meta">
          <p>
            Posted by {author} on {date}
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
