
import React from "react";
import Home from "../pages/home/Home";
import CollectionPage from "../pages/collections/Collections";
import ContactPage from "../pages/contact/Contact";

interface RoutDocument {
  href: string;
  page: React.FC;
  children?: RoutDocument[];
}

const USER_ROUTES: RoutDocument[] = [
  {
    href: "/",
    page: Home,
  },
  {
    href: "/collections",
    page: CollectionPage,
  },
  {
    href: "/contact",
    page: ContactPage,
  },
 
 
];

export { USER_ROUTES };
