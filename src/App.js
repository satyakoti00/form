import './App.css';
import { useState } from "react";

function App() {
  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    subject: [],
    resume: '',
    url: '',
    selectyourchoice: '',
    about: '',
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setValues((prev) => ({
        ...prev,
        subject: checked
          ? [...prev.subject, value]
          : prev.subject.filter((s) => s !== value),
      }));
    } else if (type === "file") {
      setValues((prev) => ({
        ...prev,
        resume: files[0],
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    setValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
    console.log("Submitted data:", values);
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Form in React</h2>

        <label>First Name*</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          value={values.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name*</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          value={values.lastname}
          onChange={handleChange}
          required
        />

        <label>Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
          required
        />

        <label>Contact*</label>
        <input
          type="tel"
          name="contact"
          placeholder="Enter Mobile Number"
          value={values.contact}
          onChange={handleChange}
          required
        />

        <label>Gender*</label>
        <div className="radio-group">
          {['Male', 'Female', 'Other'].map((gender) => (
            <label key={gender}>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={values.gender === gender}
                onChange={handleChange}
              />{" "}
              {gender}
            </label>
          ))}
        </div>

        <label>Your Best Subject</label>
        <div className="checkbox-group">
          {['English', 'Maths', 'Physics'].map((subject) => (
            <label key={subject}>
              <input
                type="checkbox"
                name="subject"
                value={subject}
                checked={values.subject.includes(subject)}
                onChange={handleChange}
              />{" "}
              {subject}
            </label>
          ))}
        </div>

        <label>Upload Resume*</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          required
        />

        <label>Enter URL*</label>
        <input
          type="url"
          name="url"
          placeholder="Enter Image URL"
          value={values.url}
          onChange={handleChange}
          required
        />

        <label>Select Your Choice</label>
        <select
          name="selectyourchoice"
          value={values.selectyourchoice}
          onChange={handleChange}
          required
        >
          <option value="">Select your choice</option>
          <option value="Not Applicable">Not Applicable</option>
          <option value="Other">Other</option>
        </select>

        <label>About*</label>
        <textarea
          name="about"
          rows="4"
          placeholder="Enter description"
          value={values.about}
          onChange={handleChange}
          required
        />

        <label>Submit OR Reset</label>
        <div className="button-group">
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
