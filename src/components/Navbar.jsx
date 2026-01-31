import React, { useContext, useState } from "react";
import alertContext from "../context/alertContext";

const Navbar = () => {

  const context = useContext(alertContext);
  const { filterAlerts, getAllAlerts } = context;

  const [filter, setFilter] = useState({
    country: "",
    status: ""
  });

  const handleFilter = (e) => {
    e.preventDefault();

    filterAlerts(filter.country, filter.status);
  };

  const handleReset = () => {
    setFilter({ country: "", status: "" });
    getAllAlerts();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark">

      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand" href="#">AlertSystem</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Left Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active">Home</a>
            </li>
          </ul>

          {/* Filter Form */}
          <form className="d-flex gap-2" onSubmit={handleFilter}>

            {/* Country */}
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              value={filter.country}
              onChange={(e) =>
                setFilter({ ...filter, country: e.target.value })
              }
              style={{ width: "150px" }}
            />

            {/* Status */}
            <select
              className="form-select"
              value={filter.status}
              onChange={(e) =>
                setFilter({ ...filter, status: e.target.value })
              }
              style={{ width: "140px" }}
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="booked">Booked</option>
              <option value="expired">Expired</option>
            </select>

            {/* Apply */}
            <button type="submit" className="btn btn-primary">
              Filter
            </button>

            {/* Reset */}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              Reset
            </button>

          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
