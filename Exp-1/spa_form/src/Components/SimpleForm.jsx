import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    uid: "",
    class: "",
    group: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Simple Form SPA</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="uid"
          placeholder="UID"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="class"
          placeholder="Class"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="group"
          placeholder="Group"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>UID: {submittedData.uid}</p>
          <p>Class: {submittedData.class}</p>
          <p>Group: {submittedData.group}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
