import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../root/App';
import routes from '../../utils/routes';
import HomePage from '../../pages/Home';

function RouterLayer(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.initial.path} element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RouterLayer;
