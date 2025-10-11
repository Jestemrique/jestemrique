import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import { Link } from "react-router-dom";
import getVersion from "../utils/getVersion";

const ListBands = () => {
  const [bands, setBands] = useState([]);
  const storyblokApi = useStoryblokApi();

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const res = await storyblokApi.get("cdn/stories", {
          starts_with: "bands/",
          version: getVersion(),
        });
        setBands(res.data.stories || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBands();
  }, [storyblokApi]);

  return (
    <ul>
      {bands.map((band) => (
        <li key={band.uuid }>
          <Link to={`/${band.full_slug}`}  className="epr-link is-size-5">
            {band.content?.title || band.name || "Banda sin título"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListBands;
