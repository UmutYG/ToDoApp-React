import React  from "react";
import { Link } from "react-router-dom";
const Filters = () => {
    return (
      <ul className="list-group list-group-horizontal mb-3">
        <li className="list-group-item">
          <Link to="/">All</Link>
        </li>
        <li className="list-group-item">
          <Link to="/pending">Pending</Link>
        </li>
        <li className="list-group-item">
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    );
  };

  export default Filters;