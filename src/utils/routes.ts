interface routeInterface {
  [title: string]: {
    name: string,
    path: string,
  }
}

const initialRoute: string = '/';

const routes: routeInterface = {
  initial: {
    name:
      'Home',
    path: initialRoute
  },
};

export default routes;
