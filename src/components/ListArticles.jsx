import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import { Link } from "react-router-dom";
import getVersion from "../utils/getVersion";

const ListArticles = () => {
  const [articles, setArticles] = useState([]);
  const storyblokApi = useStoryblokApi();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await storyblokApi.get("cdn/stories", {
          starts_with: "articles/",
          version: getVersion(),
        });
        setArticles(res.data.stories || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, [storyblokApi]);

return (
  <div className="content">
  <dl>
    {articles.map((article) => (
      <>
        <dt key={article.uuid}>
          <Link to={`/${article.full_slug}`} className="epr-link is-size-5">
            {article.content?.title || article.name || "Artículo sin título"}
          </Link>
        </dt>

        <dd className="is-size-5 mb-3 is-hidden-mobile">
          {article.content?.excerpt && <p>{article.content.excerpt}</p>}
        </dd>
      </>
    ))}
  </dl>
  </div>
);


};

export default ListArticles;




























// import { useEffect, useState } from "react";
// import { useStoryblokApi } from "@storyblok/react";
// import { Link } from "react-router-dom";
// import getVersion from "../utils/getVersion";

// const ListArticles = () => {
//   const [articles, setArticles] = useState([]);
//   const storyblokApi = useStoryblokApi();

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const res = await storyblokApi.get("cdn/stories", {
//           starts_with: "articles/",
//           version: getVersion(),
//         });
//         setArticles(res.data.stories || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchArticles();
//   }, [storyblokApi]);

//   return (
//     <ul>
//       {articles.map((article) => (
//         <li key={article.uuid}>
//           <Link to={`/${article.full_slug}`} className="epr-link is-size-5">
//             {article.content?.title || article.name || "Artículo sin título"}
            
//           </Link>
//           <div className="is-size-5 mb-3 is-hidden-mobile">
//             {article.content?.excerpt && (
//               <p>{article.content.excerpt}</p>
//             )}
//             </div>
          
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ListArticles;
