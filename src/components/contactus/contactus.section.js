import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { submitContactForm } from '../../services/api';
import axios from 'axios';

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

    const phoneRegex = /^\+?[0-9-\s]+$/;
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
    formToSend.append('address', formData.address);
    formToSend.append('description', formData.description);
    if (formData.file) {
      formToSend.append('file_upload', formData.file);
    }

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
    <section id="contact" className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3 className="text-uppercase text-primary fw-bold mb-2" style={{ fontSize: '14px' }}>
            Contact Us
          </h3>
          <h2 className="fs-2 fw-bold mb-3 text-dark">Get in Touch with Us</h2>
          <p className="text-muted mb-4">
            Select your request type and fill out the form. Whether you're a
            <strong> Company</strong> or an <strong>Individual</strong>, we’re here to help.
            For inquiries, reach us at{' '}
            <a href="mailto:support@jobboard.com" className="text-decoration-none text-primary">
              support@jobboard.com
            </a>
          </p>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="requestType" className="form-label">Request Type</label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Request Type</option>
                  <option value="JOB">Request to Publish Job Vacancies</option>
                  <option value="OTH">Other</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="userType" className="form-label">User Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select User Type</option>
                  <option value="COMPANY">Company</option>
                  <option value="INDIVIDUAL">Individual</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Your Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="form-control"
                rows={4}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="file" className="form-label">Upload a File</label>
              <input
                id="file"
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="form-control"
              />
              {fileName && <div className="text-secondary mt-1">Uploaded File: {fileName}</div>}
            </div>

            <button 
              type="submit" 
              className="btn" 
              disabled={loading}
              style={{
                backgroundColor: '#051953',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#051953',
                  opacity: 0.9
                }
              }}
            >
              {loading ? 'Submitting...' : 'Send Message'}
            </button>

            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success mt-3" role="alert">
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
