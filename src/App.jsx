import { Route, Routes, useLocation } from 'react-router-dom';
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import NavBar from './components/NavBar.jsx';
import './App.css';
import getVersion from './utils/getVersion.jsx';

function App() {
  const location = useLocation();
  let slug = location.pathname === '/' ? 'home' : location.pathname.replace("/", "");

  const navStory = useStoryblok('main-navbar', { version: getVersion() });
  
  const contentStory = useStoryblok(slug, { version: getVersion() });
  
  const notFoundStory = useStoryblok('not-found', { version: getVersion() });

  if (!navStory?.content) return <div>Loading navbar...</div>;

  const pageToShow = contentStory?.content ? contentStory : notFoundStory;
  if (!pageToShow?.content) return <div>Page not found...</div>;

  return (
    <>
    <div className="container">
      <div className="columns">
        <div className="column is-one-fifth-tablet navbar-column">
          <NavBar blok={navStory.content} />
        </div>
        <div className="column main-column text-color">
          <StoryblokComponent blok={pageToShow.content} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

