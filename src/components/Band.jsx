import { StoryblokComponent } from "@storyblok/react";  
import LastFmBand from "./LastFmBand";

const Band = ({blok}) => {
    return (
        <>
        <h1>{blok.name}</h1>
        <h2>{blok.notes}</h2>
        <LastFmBand band={blok.name} />
        </>
        
    )
};

export default Band;