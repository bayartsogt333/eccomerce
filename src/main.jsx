import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: '/product/:id',
//     element: <Product />,
//   },
//   {
//     path: '*',
//     element: <h1>404 huudas baihgvi.</h1>,
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-hd7bevg2byf6v1qc.us.auth0.com"
      clientId="nD5s6rfhlwGswgviSnSdMlXwBgwZ2yo9"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/*' element={<h1>404 huudas baihgvi.</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
);