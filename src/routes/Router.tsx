import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../layout/client/userLayout/UserLayout";
import { NotFoundPage } from "../components";
import { USER_ROUTES } from "./constants";

interface RoutDocument {
  href: string;
  page: React.FC;
  children?: RoutDocument[];
}

// Helper function to render nested routes
const renderRoutes = (routes: RoutDocument[]) => {
    return routes.map((route, i) => (
      <Route
        key={`USER_ROUTE_${i}`}
        path={route.href}
        element={React.createElement(route.page)}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  const Router: React.FC = () => {
    return (
      <Routes>
        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Public/Admin Auth Routes */}
        <Route path="/" element={<UserLayout />}>
          {renderRoutes(USER_ROUTES)}
        </Route>
      </Routes>
    );
  };

  export default Router;
