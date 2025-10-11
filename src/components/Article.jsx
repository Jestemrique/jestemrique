import { StoryblokComponent, richTextResolver } from "@storyblok/react";  

const Article = ({blok}) => {

    const {render} = richTextResolver();
    

    return (
        <>
        <h1 className="oswald-font is-size-4-mobile is-size-3-tablet">{blok.title}</h1>
        <hr className="mt-0"/>
        {/* <h2 className="roboto-flex-font is-size-5-mobile is-size-5-tablet">{blok.excerpt}</h2> */}
        <div dangerouslySetInnerHTML={{ __html: render(blok.body) }} className="robot-flex-font is-size-5-mobile is-size-4-tablet has-text-grey"/>
        </>
        
    )
};

export default Article;