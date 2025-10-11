// NavItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { storyblokEditable } from "@storyblok/react";

const CatalogLink = ({ blok }) => {
    //   const url = blok.link?.cached_url || "/";
    const url = blok.target?.cached_url || "/";

    const handleClick = () => {
        try { window.dispatchEvent(new CustomEvent("navitem-clicked")); }
        catch (e) { }
    };

    return (
        <>
            <div {...storyblokEditable(blok)}>
                    <Link to={url === "/" ? "/" : `/${url}`} onClick={handleClick}  className="epr-link is-size-5">
                        {blok.label || "No label"}
                    </Link>
            </div>
        </>
    );
};

export default CatalogLink;