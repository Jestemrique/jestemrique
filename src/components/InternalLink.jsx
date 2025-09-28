import { StoryblokComponent } from "@storyblok/react";  
import { Link } from "react-router-dom";

const InternalLink = ( {blok}) => {
    return (
        <Link to={`/${blok.link.cached_url}`}>
            {blok.label || "Album sin título"}
        </Link>
    );
};

export default InternalLink;

