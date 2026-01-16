 // (Main Component with Routing)

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


// Lazy load components for performance optimization

const Header = lazy(() => import('./components/Header'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));


// Loading fallback for lazy loading

const Loading = () => <div>Loading...</div>;


// Define routes with createBrowserRouter for better data handling

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Suspense fallback={<Loading />}><ProductList /></Suspense>} />
      <Route path="product/:id" element={<Suspense fallback={<Loading />}><ProductDetail /></Suspense>} />
      <Route path="cart" element={<Suspense fallback={<Loading />}><Cart /></Suspense>} />
      <Route path="checkout" element={<Suspense fallback={<Loading />}><Checkout /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
    </Route>
  )
);

export default router;