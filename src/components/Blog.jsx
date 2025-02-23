import React from "react";
import Footer from "./Footer";

const blogs = [
  {
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    category: "Growth",
    image:
      "https://img.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table-photography-hobby-concept_53876-24773.jpg?t=st=1738494879~exp=1738498479~hmac=0007106e918fbd12aa4c908d66880a71885c9a681d43ad95fd8b00afe3f6151d&w=900",
  },
  {
    title: "Why choose a theme that looks good with WooCommerce",
    date: "April 09, 2022",
    category: "Growth",
    image:
      "https://img.freepik.com/free-photo/tablet-which-you-can-read-blog_1134-226.jpg?t=st=1738494943~exp=1738498543~hmac=c537dd65adba18cd8f5468ad981906e34d92570c090708213cdc3cbfc478f933&w=826",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    category: "Growth",
    image:
      "https://img.freepik.com/free-photo/aerial-view-man-typing-retro-typewriter_53876-13416.jpg?t=st=1738494978~exp=1738498578~hmac=4eecc92d910909c682df36a59c021b5f6751d9ed3cbfb43e37b967690c149dac&w=360",
  },
  {
    title: "How to make your blog visually attractive",
    date: "April 09, 2022",
    category: "Design",
    image:
      "https://img.freepik.com/free-photo/graphic-designer-drawing-sketches-logo-design_53876-65936.jpg?t=st=1738494879~exp=1738498479~hmac=4329f72cfb5b8d9caa62c06cbb93c44d14a8d8f32b15be73906a4d7e00e1771d&w=900",
  }
];

const BlogSection = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-header">📖 Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <p className="blog-meta">
                <span className="blog-category">{blog.category}</span> • {blog.date}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogSection;
