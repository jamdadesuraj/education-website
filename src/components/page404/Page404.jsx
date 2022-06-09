import React from "react";
import "./page404.css";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <>
      <div className="error-section">
        <div className="error-data">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
