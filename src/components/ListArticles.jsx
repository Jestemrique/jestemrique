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
        <li key={article.uuid /* o article.id si lo tienes */}>
          <Link to={`/${article.full_slug}`}>
            {article.content?.title || article.name || "Artículo sin título"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListArticles;
