import { FunctionComponent, ReactNode } from 'react';
import HomePage from '../pages/Home';

const initialRoute = '/';

export interface routeInterface {
  [value: string]: {
    path: string,
    name?: string,
  }
}

export const routes: routeInterface = {
  initial: {
    path: initialRoute, name: 'Home'
  },
};
