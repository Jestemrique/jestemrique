import React, { useState, useEffect } from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const NavBar = ({ blok }) => {
  const items = blok?.Items || [];
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(v => !v);
  const close = () => setIsActive(false);

  useEffect(() => {
    const handler = () => setIsActive(false);
    window.addEventListener("navitem-clicked", handler);
    return () => window.removeEventListener("navitem-clicked", handler);
  }, []);

  return (
    <aside {...storyblokEditable(blok)}>
      <div className="is-hidden-tablet p-2 burger-fixed ">
        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className={`menu mobile-menu ${isActive ? "is-open-mobile" : "is-hidden-mobile"}`}>
          <ul className="menu-list">
            {items.map((item) => (
              <StoryblokComponent blok={item} key={item._uid} />
            ))}
          </ul>
        </div>
      </div>

      <div className="is-hidden-mobile navbar-column">
        <div className="menu">
          <ul className="menu-list">
            {items.map((item) => (
              <StoryblokComponent blok={item} key={item._uid} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
