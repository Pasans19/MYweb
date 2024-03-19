import React from 'react';
import './post.css';
import BlogPost from './post';

const Blog = () => {
  // Example array of blog post data
  const posts = [
    {
      title: "Post 1",
      author: "Author 1",
      date: "2024-03-15",
      content: "Content of post 1...",
      imageUrl: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Post 2",
      author: "Author 2",
      date: "2024-03-16",
      content: "Content of post 2...",
      imageUrl: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // Add more posts as needed
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <BlogPost
          key={index} // Key should be unique for each post
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default Blog;
