import { StoryblokComponent } from "@storyblok/react";
import LastFmBand from "./LastFmBand";
import ListAlbums from "./ListAlbums";
import { useLocation } from "react-router-dom";

const Band = ({ blok }) => {
    console.log("band blok: ", blok);
    const { state } = useLocation();
    const bandUuid = state?.uuid ?? blok?.uuid; 

    return (
        <>
        <h1>band name: {blok.name}</h1>
            <h1 className="oswald-font is-size-4-mobile is-size-3-tablet is-underlined ">{blok.name}</h1>

            <div className="content">
                <dl>
                    <dt><p className="oswald-font is-size-5-mobile is-size-4-tablet ">Notas:</p></dt>
                    <dd><p>{blok.notes}</p></dd>
                </dl>
            </div>

            <LastFmBand band={blok.name} />
            <h1>
            {blok.name}</h1>
            <ListAlbums bandUuid={bandUuid} />
            {/* <ListAlbums bandUuid={blok.uuid} /> */}
        </>
    )
};

export default Band;







