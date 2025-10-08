import { StoryblokComponent, richTextResolver } from "@storyblok/react";  

const Article = ({blok}) => {

    const {render} = richTextResolver();
    

    return (
        <>
        <h1 className="source-sans-3 text-color">{blok.title}</h1>
        <h2 className="source-sans-3 text-color">{blok.excerpt}</h2>
        <div dangerouslySetInnerHTML={{ __html: render(blok.body) }} className="source-sans-3"/>
        </>
        
    )
};

export default Article;