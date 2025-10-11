import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import { Link } from "react-router-dom";
import getVersion from "../utils/getVersion";

const ListAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const storyblokApi = useStoryblokApi();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await storyblokApi.get("cdn/stories", {
          starts_with: "albums/",
          version: getVersion(),
        });
        setAlbums(res.data.stories || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, [storyblokApi]);

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.uuid }>
          <Link to={`/${album.full_slug}`}  className="epr-link is-size-5">
            {album.content?.title || album.name || "Album sin título"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListAlbums;