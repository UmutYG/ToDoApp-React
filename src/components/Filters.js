import React  from "react";
const Filters = () => {
    return (
      <ul className="list-group list-group-horizontal mb-3">
        <li className="list-group-item">
          <a href="#">All</a>
        </li>
        <li className="list-group-item">
          <a href="#">Pending</a>
        </li>
        <li className="list-group-item">
          <a href="#">Completed</a>
        </li>
      </ul>
    );
  };

  export default Filters;