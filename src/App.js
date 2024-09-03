import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import HomePage from "./pages/HomePage";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <MainLandingPage/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
