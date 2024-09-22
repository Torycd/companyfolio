import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Main from "./components/Menu/Main";
import Starter from "./components/Menu/Starter";
import Professional from "./components/Menu/Professional";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLandingPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: [
            {
              path: "/",
              element: <Starter />,
            },
            {
              path: "/main",
              element: <Main />,
            },
            {
              path: "/profesional",
              element: <Professional />,
            },
          ],
        },
        {
          path: "/About",
          element: <AboutPage />,
        },
        {
          path: "/Blog",
          element: <BlogPage />,
        },
        {
          path: "/Pricing",
          element: <PricingPage />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/Login",
      element: <AboutPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
