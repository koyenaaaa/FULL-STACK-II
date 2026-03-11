import React from "react";

function App() {
  return (
    <>
      {/* Navbar Full Width */}
      <nav className="navbar navbar-dark bg-dark px-3 w-100">
        <span className="navbar-brand mb-0 h1">
          Student Basic Details Form
        </span>
      </nav>

      {/* Center Form */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div
          className="border rounded shadow p-4 bg-white"
          style={{ width: "450px" }}
        >
          <form>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter student name"
              />
            </div>

            {/* UID */}
            <div className="mb-3">
              <label className="form-label fw-semibold">UID</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter UID"
              />
            </div>

            {/* Class */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Class</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter class"
              />
            </div>

            {/* CGPA Dropdown */}
            <div className="mb-4">
              <label className="form-label fw-semibold">CGPA</label>
              <select className="form-select form-select-lg">
                <option value="">Select CGPA Range</option>
                <option>Below 5</option>
                <option>5 - 6</option>
                <option>6 - 7</option>
                <option>7 - 8</option>
                <option>8 - 9</option>
                <option>Above 9</option>
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary btn-lg w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
