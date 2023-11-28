import React, { useEffect } from 'react';
import WOW from 'wowjs';
import '../css/Blog.css';
import Header from '../components/Header';
import bg from '../assets/images/header_images/blog_page_header_image.jpg';
import blogImage1 from '../assets/images/blog_images/blog-1.jpg';
import blogImage2 from '../assets/images/blog_images/blog-2.jpg';
import blogImage3 from '../assets/images/blog_images/blog-3.jpg';

import authorImage from '../assets/images/teachers_images/soli_micheal.jpeg';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const blogData = [
    {
      imgSrc: blogImage1,
      title: 'The Impact of Responsive Web Design on User Experience',
      date: 'Jan 15, 2023',
    },
    {
      imgSrc: blogImage2,
      title: 'Key Principles of Effective Web Development',
      date: 'Feb 02, 2023',
    },
    {
      imgSrc: blogImage3,
      title: 'Optimizing SEO for Better Search Engine Rankings',
      date: 'Mar 10, 2023',
    },
    {
      imgSrc: blogImage1,
      title: 'The Impact of Responsive Web Design on User Experience',
      date: 'Jan 15, 2023',
    },
    {
      imgSrc: blogImage2,
      title: 'Key Principles of Effective Web Development',
      date: 'Feb 02, 2023',
    },
    {
      imgSrc: blogImage3,
      title: 'Optimizing SEO for Better Search Engine Rankings',
      date: 'Mar 10, 2023',
    },
  ];

  const categoryData = [
    {
      name: 'Web Design',
      count: 150,
    },
    {
      name: 'Web Development',
      count: 131,
    },
    {
      name: 'Marketing',
      count: 100,
    },
    {
      name: 'SEO',
      count: 50,
    },
    {
      name: 'Writing',
      count: 30,
    },
    {
      name: 'Consulting',
      count: 20,
    },
  ];

  return (
    <>
      <Header title="Blog" currentPage="Blog" backgroundImage={bg} />
      <div className="blog-container">
        <h3 className="blog-heading">Explore Our Blog</h3>
        <div className="blog-content">
          <div className="blog-posts">
            {blogData.map((blog, index) => (
              <div className="blog-post" key={index}>
                <div className="blog-item wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${index / 5}s`}>
                  <img className="blog-image" src={blog.imgSrc} alt="" />
                  <div className="blog-overlay">
                    <h5 className="blog-title">{blog.title}</h5>
                    <p className="blog-date">{blog.date}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="pagination">
              <ul className="pagination-list">
                <li className="pagination-item disabled">
                  <a className="pagination-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="pagination-item active"><a className="pagination-link" href="#">1</a></li>
                <li className="pagination-item"><a className="pagination-link" href="#">2</a></li>
                <li className="pagination-item"><a className="pagination-link" href="#">3</a></li>
                <li className="pagination-item">
                  <a className="pagination-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="author-bio wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <img className="author-image" src={authorImage} alt="John Doe" />
              <h3 className="author-name">Soli Michael</h3>
              <h4>About Me</h4>
              <p className="author-description">Passionate about web design, development, and everything in between. Join me on this journey of exploration and discovery!</p>
            </div>

            <div className="category-list wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
              <h3 className="tag-cloud-heading">Categories</h3>
              <ul className="category-list-group">
                {categoryData.map((category, index) => (
                  <li className="category-item" key={index}>
                    <a href="#" className="category-link">{category.name}</a>
                    <span className="badge-pill">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="recent-posts wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
              <h3 className="tag-cloud-heading">Recent Posts</h3>
              {blogData.slice(0, 3).map((blog, index) => (
                <div className="recent-post" key={index}>
                  <a className="recent-post-link" href="#">
                    <img className="recent-post-image" src={blog.imgSrc} alt="" />
                    <div className="recent-post-content">
                      <h5 className="recent-post-title">{blog.title}</h5>
                      <small className="recent-post-date">{blog.date}</small>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="tag-cloud wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.5s">
              <h3 className="tag-cloud-heading">Tag Cloud</h3>
              <div className="tag-cloud-buttons">
                <a href="#" className="tag-cloud-button">Design</a>
                <a href="#" className="tag-cloud-button">Development</a>
                <a href="#" className="tag-cloud-button">Marketing</a>
                <a href="#" className="tag-cloud-button">SEO</a>
                <a href="#" className="tag-cloud-button">Writing</a>
                <a href="#" className="tag-cloud-button">Consulting</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
