import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import MyProjects from "../page/MyProjects/MyProjects";
import NewsProject from "../page/MyProjects/NewsProject/NewsProject";
import HomeProjects from './../page/MyProjects/HomeProjects/HomeProjects';
import TechProjects from './../page/MyProjects/TechProjects/TechProjects';
import AboutMe from "../page/AboutMe/AboutMe";

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
      {
        path: 'myProjects',
        element: < MyProjects/>
      },
      {
        path: 'aboutMe',
        element: < AboutMe />
      },
      {
        path: 'newsProject',
        element: < NewsProject/>,
      },
      {
        path: 'homeProject',
        element: < HomeProjects/>,
      },
      {
        path: 'techProject',
        element: < TechProjects/>,
      },
    ]
  },
  {
    path: '/errorPage',
    element: <ErrorPage />
  }
]);



export default routes;
