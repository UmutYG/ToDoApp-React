import React  from "react";
import { Link, NavLink } from "react-router-dom";
const Filters = () => {
    return (
      <ul className="list-group list-group-horizontal mb-3">
        <li className="list-group-item">
          <NavLink exact to="/" activeClassName="active" >All</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink activeClassName="active" to="/pending">Pending</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink activeClassName="active" to="/completed">Completed</NavLink>
        </li>
      </ul>
    );
  };

  export default Filters;