import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // {
      //   path: '',
      //   element: < />
      // },
      // {
      //   path: 'signUp',
      //   element: < />,
      // },
    ]
  },
  {
    path: '/errorPage',
    element: <ErrorPage />
  }
]);



export default routes;
