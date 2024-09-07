import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import AboutPage from "./pages/AboutPage";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <MainLandingPage/>,
      children: [
        {
          path: "/",
          element: <AboutPage/>
        },
        {
          path: "/Blog",
          element: <AboutPage/>
        },
        {
          path: "/Pricing",
          element: <AboutPage/>
        },
        {
          path: "/Contact",
          element: <AboutPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
