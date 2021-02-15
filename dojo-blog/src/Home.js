import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// parent component
const Home = () => {
  // pass blogs data to Bloglist component
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  // const [name, setName] = useState('mario')
  const title = "All blogs !"

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   console.log(id)
  //   setBlogs(newBlogs)
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          console.log(res)
          if (!res.ok) {
            throw Error('could not fetch the data for that  resource')
          }
          return res.json()
        })
        .then(data => {
          console.log(data)
          setBlogs(data)
          setIsPending(false)
        })
        .catch(err => {
          console.log(err.message)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {/* child component 
    create a proprity blogs to send to child component
    */}

      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} Titre={title} />}

      {/* <button onClick={() => setName('luigi')}>Change name</button>
      {name} */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} Titre="Mario's blogs" handleDelete={handleDelete} /> */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} Titre="yoshi's blogs" handleDelete={handleDelete} /> */}

    </div>
  );
}

export default Home;