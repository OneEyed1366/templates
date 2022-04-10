import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootTemplate from '../../ui/templates/RootTemplate';
import HomePage from '../../ui/pages/Home';

function RouterLayer(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<RootTemplate />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RouterLayer;
