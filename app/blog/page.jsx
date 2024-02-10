"use client";

import React from 'react';

import Row from 'react-bootstrap/Row';

import FeaturedPost from '@/components/featured-blog-post/FeaturedPost.component';
import BlogPosts from '@/components/blog-posts/BlogPosts.component';

import styles from './blog.module.css';

const Blog = () => {
  return (
    <div>
      <div className={styles.blog_container}>
        <div className={styles.img_container}>
          <h1 id={styles['text']}>THE BLOG</h1>
        </div>
        <Row>
          <FeaturedPost />
        </Row>
        <Row className={styles.posts_container}>
          <BlogPosts />
        </Row>
      </div>
    </div>
  );
};

export default Blog;
