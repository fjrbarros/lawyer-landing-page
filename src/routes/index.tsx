import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Loader } from '../components';

const Home = lazy(() => import('../pages/home/Home'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
