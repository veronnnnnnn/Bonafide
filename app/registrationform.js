// RegistrationForm.js
import { useFormik } from "formik";

const RegistrationForm = ({ onSubmitSuccess }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      onSubmitSuccess(); // Call the function passed from the parent component
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="registration-form">
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <button type="submit" className="submit-button">
          Register Now
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
