import { StoryblokComponent } from "@storyblok/react";  

const PageSubtitle = ({blok}) => {
    return (
        <h1>{blok.page_subtitle}</h1>
    )
};

export default PageSubtitle;