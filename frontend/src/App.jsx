import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import * as sessionActions from "./store/session";
import LandingPageFeed from "./components/LandingPageFeed/LandingPageFeed";
import CreateNewProperty from "./components/PropertyComponents/CreateNewProperty/CreateNewProperty";
import ListAllProperties from "./components/PropertyComponents/ListAllProperties/ListAllProperties";
import SelectedSpotsPage from "./components/SelectedSpotsPage/SelectedSpotsPage";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <div className="app-container">
      <div className="app-display">
        <nav className="navigation">
          <Navigation isLoaded={isLoaded} />
        </nav>
        <div className="display-content-container">
          {isLoaded && <Outlet />}
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPageFeed />,
      },
      {
        path: "/spots/:spotId",
        element: <SelectedSpotsPage />,
      },
      {
        path: "/:userId/current-properties/",
        element: <ListAllProperties />,
      },
      {
        path: "/:userId/new-property",
        element: <CreateNewProperty />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
