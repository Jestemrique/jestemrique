import { StoryblokComponent } from "@storyblok/react";  

const Band = ({blok}) => {
    return (
        <>
        <h1>{blok.name}</h1>
        <h2>{blok.notes}</h2>
        </>
        
    )
};

export default Band;