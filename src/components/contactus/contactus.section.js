import React, { useState } from 'react';
import './contactUs.css';
import axios from 'axios';
import { submitContactForm } from '../../services/api';

function ContactSection() {
  const [formData, setFormData] = useState({
    requestType: '',
    userType: '',
    name: '',
    email: '',
    phone: '',
    address: '', 
    description: '',
    file: null,
  });

  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });

    if (type === 'file' && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setError('');
    setLoading(true);

    const formToSend = new FormData();
    formToSend.append('request_type', formData.requestType);
    formToSend.append('entity_type', formData.userType);
    formToSend.append('name', formData.name);
    formToSend.append('email', formData.email);
    formToSend.append('phone', formData.phone);
    formToSend.append('address', formData.address); // NEW
    formToSend.append('description', formData.description);
    if (formData.file) {
      formToSend.append('file_upload', formData.file);
    }

  //   try {
  //     const response = await submitContactForm(formToSend);
  //     setSuccess('Form submitted successfully!');
  //     console.log('Response:', response.data);

  //     // Reset form
  //     setFormData({
  //       requestType: '',
  //       userType: '',
  //       name: '',
  //       email: '',
  //       phone: '',
  //       address: '', 
  //       description: '',
  //       file: null,
  //     });
  //     setFileName('');
  //   } catch (err) {
  //     console.error('Error submitting form:', err);
  //     setError('Failed to submit the form. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  axios
  .post('http://127.0.0.1:8000/api/requests/', formToSend, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  .then((response) => {
    setSuccess('Form submitted successfully!');
    console.log('Response:', response.data);

    // Reset form
    setFormData({
      requestType: '',
      userType: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      file: null,
    });
    setFileName('');
  })
  .catch((err) => {
    console.error('Error submitting form:', err);
    setError('Failed to submit the form. Please try again.');
  })
  .finally(() => {
    setLoading(false);
  });
};

  return (
    <section id="contact" className="contact-section">
      <div className="left-section">
        <h3 className="sub-heading">
          CONTACT <span className="highlight">US</span>
        </h3>
        <h2 className="heading">Get in Touch with Us</h2>
        <p className="description">
          Select your request type and fill out the form. Whether you're a <strong>Company</strong> or an <strong>Individual</strong>,
          we’re here to help. For inquiries, reach us at{' '}
          <a href="mailto:support@jobboard.com" className="link">
            support@jobboard.com
          </a>
        </p>
      </div>

      <div className="right-section">
        <form onSubmit={handleSubmit} className="form">

          <div className="row">
            <div className="field">
              <label htmlFor="requestType" className="label">Request Type</label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="">Select Request Type</option>
                <option value="JOB">Request to Publish Job Vacancies</option>
                <option value="OTH">Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="userType" className="label">User Type</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="">Select User Type</option>
                <option value="COMPANY">Company</option>
                <option value="INDIVIDUAL">Individual</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="name" className="label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>

          <div className="full-field">
            <label htmlFor="phone" className="label">Phone Number</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="full-field">
            <label htmlFor="address" className="label">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="full-field">
            <label htmlFor="description" className="label">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Your Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="textarea"
            />
          </div>

          <div className="full-field">
            <label htmlFor="file" className="label">Upload a File</label>
            <input
              id="file"
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="file-input"
            />
            {fileName && <p className="file-name">Uploaded File: {fileName}</p>}
          </div>

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Submitting...' : 'Send Message'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </section>
  );
}

export default ContactSection;
