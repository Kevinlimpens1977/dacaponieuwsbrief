import { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import AiLandingPage from './pages/ai/AiLandingPage';
import TopsportberichtPage from './pages/topsportbericht/TopsportberichtPage';

function getRoute(): string {
  const hash = window.location.hash.replace('#', '') || '/';
  return hash;
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  switch (route) {
    case '/ai-introductie':
      return <AiLandingPage />;
    case '/topsportbericht':
      return <TopsportberichtPage />;
    default:
      return <HomePage />;
  }
}

export default App;
