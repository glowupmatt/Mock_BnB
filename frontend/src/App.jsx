import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import * as sessionActions from "./store/session";
import LandingPageFeed from "./components/LandingPageFeed/LandingPageFeed";
import CreateNewProperty from "./components/PropertyComponents/CreateNewProperty/CreateNewProperty";
import ListAllProperties from "./components/PropertyComponents/ListAllProperties/ListAllProperties";
import SelectedSpotsPage from "./components/SelectedSpotsPage/SelectedSpotsPage";
import UpdateCurrentProperty from "./components/PropertyComponents/ListAllProperties/updatePropertyForm/UpdateCurrentProperty";

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

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

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
        path: "/:propertyId/edit",
        element: <UpdateCurrentProperty />,
      },
      {
        path: "/:userId/new-property",
        element: <CreateNewProperty />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
