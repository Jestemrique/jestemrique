import { StoryblokComponent } from "@storyblok/react";  

const Article = ({blok}) => {
    return (
        <>
        <h1>{blok.title}</h1>
        <h2>{blok.excerpt}</h2>
        <p>{blok.body}</p>
        </>
        
    )
};

export default Article;