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
    <ul>
      {articles.map((article) => (
        <li key={article.uuid}>
          <Link to={`/${article.full_slug}`}>
            {article.content?.title || article.name || "Artículo sin título"}
            <div className="roboto-flex-font has-text-grey is-hidden-mobile">
            {article.content?.excerpt && (
              <p>{article.content.excerpt}</p>
            )}
            </div>
          </Link>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default ListArticles;
