import React, { useState, useEffect } from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const NavBar = ({ blok }) => {
  const items = blok?.Items || [];
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(v => !v);
  const close = () => setIsActive(false);

  useEffect(() => {
    // listener para cerrar el menú cuando se haga click en un NavItem
    const handler = () => setIsActive(false);
    window.addEventListener("navitem-clicked", handler);
    return () => window.removeEventListener("navitem-clicked", handler);
  }, []);

  return (
    <aside {...storyblokEditable(blok)}>
      {/* Burger visible solo en móvil */}
      <div className="is-hidden-tablet p-2 burger-fixed">
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
      </div>

      {/* Menú vertical (Bulma .menu) - se oculta en mobile salvo si isActive */}
      <div className={`menu ${isActive ? "" : "is-hidden-mobile"}`}>
        <ul className="menu-list ">
          {items.map((item) => (
            // Renderizamos el componente Storyblok (NavItem) que devuelve <li>
             <StoryblokComponent blok={item} key={item._uid} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;

















// import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

// const NavBar = ({ blok }) => {
//   const items = blok?.Items || [];

//   return (
//     <>

//     <nav {...storyblokEditable(blok)}>
//           {items.map((item) => (
//             <StoryblokComponent blok={item} key={item._uid} />
//           ))}
//     </nav>
//     </>
//   );
// };

// export default NavBar;




