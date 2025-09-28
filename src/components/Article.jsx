import { StoryblokComponent, richTextResolver } from "@storyblok/react";  

const Article = ({blok}) => {

    const {render} = richTextResolver();
    

    return (
        <>
        <h1>{blok.title}</h1>
        <h2>{blok.excerpt}</h2>
        <div dangerouslySetInnerHTML={{ __html: render(blok.body) }} />
        </>
        
    )
};

export default Article;