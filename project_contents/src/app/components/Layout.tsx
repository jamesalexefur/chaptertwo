import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { useEffect } from 'react';

export function Layout() {
  useEffect(() => {
    // Ensure viewport meta tag is set for mobile responsiveness
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');

    // Add language attribute
    document.documentElement.lang = 'en';

    // Add theme color for mobile browsers
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#B5294E');
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  );
}
