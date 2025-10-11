import { StoryblokComponent, richTextResolver } from "@storyblok/react";  

const PageSubtitle = ({blok}) => {

    const {render} = richTextResolver();

    return (
        <h2 dangerouslySetInnerHTML={{ __html: render(blok.page_subtitle) }} 
            className="roboto-flex-font is-size-5-mobile is-size-4-tablet mb-3"/>
    )
};

export default PageSubtitle;