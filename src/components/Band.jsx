import { StoryblokComponent } from "@storyblok/react";
import LastFmBand from "./LastFmBand";

const Band = ({ blok }) => {
    return (
        <>
            <h1 className="oswald-font is-size-4-mobile is-size-3-tablet is-underlined ">{blok.name}</h1>

            <div className="content">
                <dl>
                    <dt><p className="oswald-font is-size-5-mobile is-size-4-tablet ">Notas:</p></dt>
                    <dd><p>{blok.notes}</p></dd>
                </dl>
            </div>

            <LastFmBand band={blok.name} />

        </>
    )
};

export default Band;







