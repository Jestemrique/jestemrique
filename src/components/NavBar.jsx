import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const NavBar = ({ blok }) => {

    return (
        <>
        <nav {...storyblokEditable(blok)}>
            {blok.Items.map( (item) => (
                <StoryblokComponent blok={item} key={item._uid} />
            ))}
        </nav>

        <hr />
        </>
        
    );
}

export default NavBar;