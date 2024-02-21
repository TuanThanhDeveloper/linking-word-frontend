import { AppRoutes } from '@/routes';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <React.Suspense>
      <Router>
        <AppRoutes />
      </Router>
    </React.Suspense>
  );
}

export default App;
