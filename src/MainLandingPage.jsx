import { Outlet } from "react-router-dom";
import NavigationMenu from "./components/Navigation/NavigationMenu";
import Footer from "./components/Footer/Footer";

const MainLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between font-Oswald">
      <div className="fixed top-0 left-0 right-0 xl:px-64  sm:px-10 px-4 py-8  z-50 bg-white">
        <NavigationMenu />
      </div>
      <div className="xl:px-64  sm:px-10 px-4">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLandingPage;