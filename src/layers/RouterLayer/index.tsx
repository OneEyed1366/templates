import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../root/App';
import HomePage from '../../pages/Home';

function RouterLayer(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RouterLayer;
