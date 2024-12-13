import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

// Lazy-loaded components
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));

// Fallback UI for errors


// App Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<div>Loading Login...</div>}>
                  <Login />
                </Suspense>
               </ErrorBoundary>
            }
          />
          <Route
            path="/register"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
               <Suspense fallback={<div>Loading Register...</div>}>
                  <Register />
               </Suspense>
               </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

// Render the App
export default App;

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
