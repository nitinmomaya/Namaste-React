import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import CardList from "./src/components/CardList";

//Create routing configuration-->

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Restaurant from "./src/components/Restaurant";

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
      },
      {
        path: "/",
        element: <CardList />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      //we have to define home page as well under children
    ],
  },
]);

//we need provide this appRouter to App using RouterProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
