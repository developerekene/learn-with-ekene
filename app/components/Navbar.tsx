import Link from "next/link";
import React from "react";
import styles from "page.module.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="nav-container">
      <div>
        <Link
          href={{
            pathname: "/",
          }}
          className="nav-link-title"
        >
          <h2 className="nav-title">Learn with Ekenedilichukwu</h2>
        </Link>
      </div>
      <ul className="nav-ul">
        <Link
          className="nav-links"
          href={{
            pathname: "/courses",
          }}
        >
          Courses
        </Link>
        <Link
          className="nav-links"
          href={{
            pathname: "/howto",
          }}
        >
          How To
        </Link>
        <Link
          className="nav-links"
          href={{
            pathname: "/exercises",
          }}
        >
          Exercises
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
