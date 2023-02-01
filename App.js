import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import CardList from "./src/components/CardList";

//Create routing configuration-->

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Restaurant from "./src/components/Restaurant";
import ProfileClass from "./src/components/ProfileClass";
import Shimmer from "./src/components/Shimmer";

// import Instamart from "./src/components/Instamart";
// we do a lazy loading for instamart below

const Instamart = lazy(() => import("./src/components/Instamart"));

const AppLayout = () => {
  console.log("RENDERED FROM [App.js]");

  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        // children: [
        //   {
        //     path: "profile",
        //     element: <ProfileClass />,
        //   },
        // ],
      },

      {
        path: "/",
        element: <CardList />,
      },

      {
        path: "/about/profile",
        element: <ProfileClass />,
      },
      {
        path: "/profile",
        element: <ProfileClass />,
      },

      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },

      //we have to define home page as well under children
    ],
  },
]);

//we need provide this appRouter to App using RouterProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
