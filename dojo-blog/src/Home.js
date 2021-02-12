import { useState } from "react";
import BlogList from "./BlogList";
// parent component
const Home = () => {
  // pass blogs data to Bloglist component
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario2', id: 3 }
  ])

  const title = "All blogs !"

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    console.log(id)
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      {/* child component 
    create a proprity blogs to send to child component
    */}
      <BlogList blogs={blogs} Titre={title} handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} Titre="Mario's blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} Titre="yoshi's blogs" handleDelete={handleDelete} />

    </div>
  );
}

export default Home;