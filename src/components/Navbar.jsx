import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setActive("home");
    } else if (currentPath === "/produkt/" || currentPath === "/produkt") {
      setActive("produkt");
    } else if (currentPath === "/about-us/" || currentPath === "/about-us") {
      setActive("about-us");
    } else if (currentPath === "/impressum/" || currentPath === "/impressum") {
      setActive("impressum");
    }
  }, []); // Run this effect only once after the initial render

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <a href="/" className="font-bold flex items-center">
          <img
            src="/Logo.jpeg"
            alt="Logo"
            className="h-16 w-16 rounded-md object-cover mr-2"
          />
        </a>
      </div>
      <div className="mt-4 md:mt-0 md:flex-grow md:flex md:items-center md:justify-center">
        <div className="flex flex-col md:flex-row md:items-center md:ml-2 md:gap-16 text-2xl">
          <a
            className={`nav-link ${active === "home" ? "text-sky-200" : ""} md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline`}
            href="/"
          >
            Startseite
          </a>
          <a
            className={`nav-link ${active === "produkt" ? "text-sky-200" : ""} md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline`}
            href="/produkt"
          >
            Produkt
          </a>
          <a
            className={`nav-link ${active === "about-us" ? "text-sky-200" : ""} md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline`}
            href="/about-us"
          >
            Über uns
          </a>
          <a
            className={`nav-link ${active === "impressum" ? "text-sky-200" : ""} md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline`}
            href="/impressum"
          >
            Impressum
          </a>
        </div>
        {/* Removed shopping cart section */}
      </div>
    </nav>
  );
}

export default Navbar;
