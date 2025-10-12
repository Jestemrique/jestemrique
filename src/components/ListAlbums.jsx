import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import { Link } from "react-router-dom";
import getVersion from "../utils/getVersion";

// 9f1678a9-bf39-4fb4-b223-cb24c53b96be

// 7f78cb3e-9ca2-4250-90c5-befd84cfc9a1

// const ListAlbums = ({bandUuid='7f78cb3e-9ca2-4250-90c5-befd84cfc9a1'}) => {
const ListAlbums = ({bandUuid}) => {
  const [albums, setAlbums] = useState([]);
  const storyblokApi = useStoryblokApi();

  console.log("bandName: ", bandUuid);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await storyblokApi.get("cdn/stories", {
          starts_with: "albums/",
          //"filter_query[title][in]": "Automatic",
          "filter_query[band][in]": bandUuid,
          //resolve_relations: "album.band",
          version: getVersion(),
        });

//        console.log("resultado: ", res.data.stories);
        setAlbums(res.data.stories || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, [storyblokApi]);




  return (
    <ul>
      <h1>{bandUuid}</h1>
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









// import { useEffect, useState } from "react";
// import { useStoryblokApi } from "@storyblok/react";
// import { Link } from "react-router-dom";
// import getVersion from "../utils/getVersion";

// const ListAlbums = () => {
//   const [albums, setAlbums] = useState([]);
//   const storyblokApi = useStoryblokApi();

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const res = await storyblokApi.get("cdn/stories", {
//           starts_with: "albums/",
//           version: getVersion(),
//         });
//         setAlbums(res.data.stories || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchAlbums();
//   }, [storyblokApi]);

//   return (
//     <ul>
//       {albums.map((album) => (
//         <li key={album.uuid }>
//           <Link to={`/${album.full_slug}`}  className="epr-link is-size-5">
//             {album.content?.title || album.name || "Album sin título"}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ListAlbums;