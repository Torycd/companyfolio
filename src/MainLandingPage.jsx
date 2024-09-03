import { Outlet } from "react-router-dom";
import NavigationMenu from "./components/Navigation/NavigationMenu";

const MainLandingPage = () => {
  return (
    <div>
      <div className="lg:px-64 md:px-24 sm:px-10 px-4 lg:pt-6 md:pt-4 pt-3">
        <NavigationMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLandingPage;
