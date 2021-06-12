import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blogPost) => {
        return (
          <div className="blog-preview" key={blogPost.id}>
            <Link to={`/blogs/${blogPost.id}`}>
              <h2>{blogPost.title}</h2>
              <p>Written by: {blogPost.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
