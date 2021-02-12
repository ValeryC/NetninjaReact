const BlogList = ({ blogs, Titre, handleDelete }) => {

  return (
    <div className="blog-list">
      <h2>{Titre}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog </button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const Titre = props.Titre
//   return (
//     <div className="blog-list">
//       <h2>{Titre}</h2>
//       {blogs.map(blog => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BlogList;