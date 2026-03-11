import React from "react";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div>
      <MyNavbar />

      <div className="container mt-5">
        <h2 className="fw-bold">
          Experiment-4: Responsive Navigation Bar Using Component Library
        </h2>

        <h4 className="mt-4 fw-bold">Aim</h4>
        <p>To design a responsive navigation bar using a UI component library.</p>

        <h4 className="mt-4 fw-bold">Procedure</h4>
        <ol>
          <li>Import Navbar component.</li>
          <li>Add navigation links.</li>
          <li>Ensure responsiveness.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
