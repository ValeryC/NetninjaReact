import BlogList from "./BlogList";
import useFetch from "./useFetch"
// parent component
const Home = () => {
  // pass blogs data to Bloglist component
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // const [name, setName] = useState('mario')
  const title = "All blogs !"

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   console.log(id)
  //   setBlogs(newBlogs)
  // }

  return (
    <div className="home">
      {/* child component 
    create a proprity blogs to send to child component
    */}
      {error && <div>{error}</div>}
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