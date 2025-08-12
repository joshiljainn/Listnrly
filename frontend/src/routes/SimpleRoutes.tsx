import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { LandingPage } from '../pages/Landing/LandingPage';
import { SignupPage } from '../pages/Signup/SignupPage';
import { LoadingPage } from '../pages/Loading/LoadingPage';
import { SampleDashboard } from '../pages/Dashboard/SampleDashboard';

const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/loading', element: <LoadingPage /> },
  { path: '/dashboard', element: <SampleDashboard /> },
  // Catch all route for SPA
  { path: '*', element: <LandingPage /> }
];

export const router = createBrowserRouter(routes);

export default function SimpleRouter() {
  return router;
}
