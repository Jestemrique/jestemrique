import { StoryblokComponent, richTextResolver } from "@storyblok/react";  

const PageSubtitle = ({blok}) => {

    const {render} = richTextResolver();

    return (
        // <h1>{blok.page_subtitle}</h1>
        <h1 dangerouslySetInnerHTML={{ __html: render(blok.page_subtitle) }} />
    )
};

export default PageSubtitle;