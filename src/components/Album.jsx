import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import LastFmAlbum from "./LastFmAlbum";
import getVersion from "../utils/getVersion";

const Album = ({ blok }) => {
    const { '*': slug } = useParams();
    const story = useStoryblok(slug, {
        version: getVersion(),
        resolve_relations: ['album.band']
    });
    if (!story?.content) {
        return <div>Loading album...</div>;
    }

    const band = story.content.band;
    const bandName = typeof band === 'object' ? band.name : band;
    const albumTitle = story.content.title;

    return (
        <>
        <div className="box">
            <h1 className="oswald-font is-size-4-mobile is-size-3-tablet is-underlined ">{albumTitle}</h1>
            <p><span className="oswald-font is-size-5-mobile is-size-4-tablet has-text-weight-medium">Band: </span> {bandName}</p>
            <p><span className="oswald-font is-size-5-mobile is-size-4-tablet  has-text-weight-medium">Format:</span> {story.content.format}</p>
            <p><span className="oswald-font is-size-5-mobile is-size-4-tablet  has-text-weight-medium">Notes:</span> {story.content.notes}</p>
</div>
            <LastFmAlbum band={bandName} album={albumTitle} />

        </>
    );
};

export default Album;


















// import { useStoryblok } from "@storyblok/react";
// import { useParams } from "react-router-dom";
// import LastFmAlbum from "./LastFmAlbum";
// import getVersion from "../utils/getVersion";

// const Album = ({ blok }) => {
//     const { '*': slug } = useParams();
//     const story = useStoryblok(slug, {
//         version: getVersion(),
//         resolve_relations: ['album.band']
//     });
//     if (!story?.content) {
//         return <div>Loading album...</div>;
//     }

//     const band = story.content.band;
//     const bandName = typeof band === 'object' ? band.name : band;
//     const albumTitle = story.content.title;

//     return (
//         <>
//             <h1 className="oswald-font is-size-4-mobile is-size-3-tablet is-underlined ">{albumTitle}</h1>
//             <h2>{bandName}</h2>
//             <h2>{story.content.format}</h2>
//             <p>{story.content.notes}</p>
//             <LastFmAlbum band={bandName} album={albumTitle} />
//         </>
//     );
// };

// export default Album;
