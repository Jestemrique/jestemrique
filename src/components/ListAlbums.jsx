import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import { Link } from "react-router-dom";
import getVersion from "../utils/getVersion";

const ListAlbums = ({bandUuid}) => {
  const [albums, setAlbums] = useState([]);
  const storyblokApi = useStoryblokApi();

  console.log("bandName: ", bandUuid);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await storyblokApi.get("cdn/stories", {
          starts_with: "albums/",
          "filter_query[band][in]": bandUuid,
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

