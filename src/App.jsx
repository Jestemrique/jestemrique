import { Route, Routes, useLocation } from 'react-router-dom';
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import NavBar from './components/NavBar.jsx';


function App() {

  const location = useLocation();
  let slug = location.pathname === '/' ? 'home' : location.pathname.replace("/", "");

  const navStory = useStoryblok('main-navbar', { version: 'draft' });
  const contentStory = useStoryblok(slug, { version: 'draft' });
  const notFoundStory = useStoryblok('not-found', { version: 'draft' });

  if (!navStory.content) return <div>Loading navbar...</div>;

  const pageToShow = contentStory?.content ? contentStory : notFoundStory;

  if (!pageToShow?.content) return <div>Page not found...</div>;

  return (
    <>
      <NavBar blok={navStory?.content} />
      <StoryblokComponent blok={pageToShow.content} />
    </>
  );
}

export default App
