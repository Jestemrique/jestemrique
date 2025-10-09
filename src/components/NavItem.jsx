// NavItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { storyblokEditable } from "@storyblok/react";

const NavItem = ({ blok }) => {
  const url = blok.link?.cached_url || "/";

  const handleClick = () => {
    try { window.dispatchEvent(new CustomEvent("navitem-clicked")); }
    catch (e) {}
  };

  // has-text-right-tablet -> alinea a la derecha en tablet+ (puedes usar -desktop si prefieres solo desktop)
  return (
    <li {...storyblokEditable(blok)} className="has-text-right-tablet">
      <Link to={url === "/" ? "/" : `/${url}`} onClick={handleClick} >
        <div className=" has-text-right-tablet oswald-font is-size-4-tablet "> 
          {blok.label || "No label"}
          </div>
      </Link>
    </li>
  );
};

export default NavItem;

