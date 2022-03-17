import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Loader } from "../../assets/index.js";
import './onePost.styles.css';
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return (
    <div className="loader">
      <img src={Loader} alt="" />
    </div>);

  return (
    <div className="post-page">
      <div className="blog-container">
        <div className="">
          <img
            className="post-banner"
            src={urlFor(postData.mainImage).url()}
            alt=""
          />
          <div className="">
            {/* Title Section */}
            <div className="">
              <h2 className="post-title">
                {postData.title}
              </h2>
              <div className="author-div">
                <div >
                  <img className="author-image" src={urlFor(postData.authorImage).url()} alt="" />
                </div>
                <p className="">
                  by {postData.name}
                </p>
              </div>
            </div>
          </div>
          <hr />
          
        </div>
        <div className="blog-contents">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}