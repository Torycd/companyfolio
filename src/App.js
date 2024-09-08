import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLandingPage />,
      children: [
        {
          path: "/",
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
