import { storyblokEditable } from "@storyblok/react";
import { Link } from "react-router-dom";

const NavItem = ({ blok }) => {
    const url = blok.link?.cached_url || "/";
    return (
        <Link to={url === "/" ? "/" : `/${url}`}
        >
            {blok.label || "No label"}
        </Link>
    );
}

export default NavItem;