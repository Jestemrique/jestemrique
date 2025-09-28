import { StoryblokComponent } from "@storyblok/react";  

const PageTitle = ({blok}) => {
    return (
        <h1>{blok.page_title}</h1>
    )
};

export default PageTitle;



