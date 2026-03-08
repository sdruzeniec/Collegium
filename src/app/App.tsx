import { RouterProvider, createBrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import CalendarPage from './pages/CalendarPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/:categoryId',
    element: <CategoryPage />,
  },
  {
    path: '/mapa',
    element: <MapPage />,
  },
  {
    path: '/informace',
    element: <InfoPage />,
  },
  {
    path: '/kalendar',
    element: <CalendarPage />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </>
  );
}