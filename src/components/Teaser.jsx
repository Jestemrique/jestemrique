import { StoryblokComponent } from "@storyblok/react";  

export default function Teaser( {blok}) {
    return (
        <div>
            <h2>{blok.headline}</h2>
            <p>{blok.text}</p>
            {blok.image && <img src={blok.image} alt={blok.headline} />}
        </div>
    );
};

