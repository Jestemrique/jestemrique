import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'

import { storyblokInit, apiPlugin } from '@storyblok/react'

import Page from './components/Page.jsx';
import Teaser from './components/Teaser.jsx'
import NavBar from './components/NavBar.jsx';
import NavItem from './components/NavItem.jsx';
import PageTitle from './components/PageTitle.jsx';
import PageSubtitle from './components/PageSubtitle.jsx';
import ListArticles from './components/ListArticles.jsx';
import ListAlbums from './components/ListAlbums.jsx';
import Article from './components/Article.jsx';
import Band from './components/Band.jsx';
import Album from './components/Album.jsx';
import ListBands from './components/ListBands.jsx';
import InternalLink from './components/InternalLink.jsx';


storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    nav_bar: NavBar,
    nav_item: NavItem,
    page_title: PageTitle,
    page_subtitle: PageSubtitle,
    list_articles: ListArticles,
    list_albums: ListAlbums,
    article: Article,
    band: Band,
    album: Album,
    list_bands: ListBands,
    internal_link: InternalLink,
  },
  apiOptions: {
    region: 'eu',
  },
});

const router = createBrowserRouter([
  {
    path: '/*',
    Component: App,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
  </StrictMode>,
)
