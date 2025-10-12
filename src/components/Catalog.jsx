import { StoryblokComponent } from "@storyblok/react";

export default function Catalog( {blok}) {
    return (
        <>
            <main >
                {
                blok.catalog_content?.map( 
                        (nestedBlok) => (
                                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        )
                    )
                }
            </main>
        </>
    );
}