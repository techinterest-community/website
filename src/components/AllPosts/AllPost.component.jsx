import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import "./allpost.styles.css";

const AllPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);
  const [search, setSearch] = useState("");



  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .then((data) => console.log(data))
      .catch(console.error);
  }, []);

  const filterBlogs = allPostsData?.filter(post => 
  post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="search-area">
        <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="posts-main-container">
        {filterBlogs &&
          filterBlogs.map((post, index) => (
            <Link to={"/blogs/" + post.slug.current} key={post.slug.current}>
              <div className="post-container" key={index}>
                <img
                  className="blog-post-thumb"
                  src={post.mainImage.asset.url}
                  alt=""
                />
                <h3>{post.title}</h3>
                <p>read more &#8594;</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllPosts;
