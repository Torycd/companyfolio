import { Outlet } from "react-router-dom";
import NavigationMenu from "./components/Navigation/NavigationMenu";

const MainLandingPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 lg:px-64 md:px-24 sm:px-10 px-4  z-50 bg-white">
        <NavigationMenu />
      </div>
      <div className="lg:px-64 md:px-24 sm:px-10 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLandingPage;
