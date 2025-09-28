import { StoryblokComponent, useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";

const Album = ({ blok }) => {
    const { '*': slug } = useParams();
    const story = useStoryblok(slug, {
        version: 'draft',
        resolve_relations: ['album.band'] // O el nombre correcto de la relación
    });

    if (!story?.content) {
        return <div>Loading album...</div>;
    }

    // Si band es una relación resuelta, será un objeto, no un string
    const band = story.content.band;
    const bandName = typeof band === 'object' ? band.name : band; // fallback por si acaso

    return (
        <>
            <h1>{story.content.title}</h1>
            <h2>{bandName}</h2>
            <h2>{story.content.format}</h2>
            <p>{story.content.notes}</p>
        </>
    );
};

export default Album;