import { useState, useEffect, JSX } from 'react'
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
import { LandingPage } from '@/pages/Landing/LandingPage';
import { SignupPage } from '@/pages/Signup/SignupPage';
import { LoadingPage } from '@/pages/Loading/LoadingPage';
import { SampleDashboard } from '@/pages/Dashboard/SampleDashboard';

// Router Setup
function createRouter(): ReturnType<typeof createBrowserRouter> {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/loading',
      element: <LoadingPage />
    },
    {
      path: '/dashboard',
      element: <SampleDashboard />
    }
  ];

  return createBrowserRouter(routes);
}

export default function SimpleRouter(): JSX.Element | null {
  const [router, setRouter] = useState<ReturnType<typeof createBrowserRouter> | null>(null);

  useEffect(() => {
    setRouter(createRouter());
  }, []);

  return router ? <RouterProvider router={router} /> : null;
}
