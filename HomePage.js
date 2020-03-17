import React from "react";
import { Link } from "react-router-dom";

export default ({ name }) => {
  return (
    <div className="bg-img">
      <h1 className="text-center color-white">{name}!</h1>
      <ul>
        <li className="button textCenter">
          <Link to="/events">View Events</Link>
        </li>
      </ul>
    </div>
  );
};
