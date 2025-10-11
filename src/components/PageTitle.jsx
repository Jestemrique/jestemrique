import { StoryblokComponent } from "@storyblok/react";  

const PageTitle = ({blok}) => {
    return (
        <h1 className="oswald-font is-size-4-mobile is-size-3-tablet is-underlined ">{blok.page_title}</h1>
    )
};

export default PageTitle;



