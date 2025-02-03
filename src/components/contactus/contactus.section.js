import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { submitContactForm } from '../../services/api';
import axios from 'axios';
import aboutImage from '../../assets/contact_us.jpg';

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
  <h3 className="text-uppercase text-primary fw-bold mb-2" style={{ fontSize: '14px', letterSpacing: '1px' }}>
    Contact Us
  </h3>
  
  <h2 className="fs-2 fw-bold mb-3 text-dark" style={{ fontSize: '34px', lineHeight: '1.3' }}>
    Get in Touch with Us
  </h2>
  
  <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.8' }}>
    Whether you're a <strong>Company</strong> or an <strong>Individual</strong>, we’re here to help. 
    Our team is passionate about delivering seamless solutions and support for all your needs. 
    Got a question? An inquiry? Or perhaps a potential collaboration? 
    We would love to hear from you! Select your request type and fill out the form below, or simply reach out to us at{' '}
    <a href="mailto:jobboard@gmail.com" className="text-decoration-none text-primary">
      jobboard@gmail.com
    </a>.
  </p>

  <div className="col-mb-3">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
</div>



  <div className="col-md-6">
    <form onSubmit={handleSubmit}>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="requestType" className="form-label" style={{ fontSize: '16px' }}>Request Type</label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            required
            className="form-select shadow-sm"
            style={{ borderRadius: '8px' }}
          >
            <option value="">Select Request Type</option>
            <option value="JOB">Request to Publish Job Vacancies</option>
            <option value="OTH">Other</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="userType" className="form-label" style={{ fontSize: '16px' }}>User Type</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            className="form-select shadow-sm"
            style={{ borderRadius: '8px' }}
          >
            <option value="">Select User Type</option>
            <option value="COMPANY">Company</option>
            <option value="INDIVIDUAL">Individual</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="name" className="form-label" style={{ fontSize: '16px' }}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control shadow-sm"
            style={{ borderRadius: '8px' }}
          />
        </div>
        <div className="col">
          <label htmlFor="email" className="form-label" style={{ fontSize: '16px' }}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control shadow-sm"
            style={{ borderRadius: '8px' }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="form-label" style={{ fontSize: '16px' }}>Phone Number</label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="form-control shadow-sm"
          style={{ borderRadius: '8px' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="form-label" style={{ fontSize: '16px' }}>Address</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="form-control shadow-sm"
          style={{ borderRadius: '8px' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="form-label" style={{ fontSize: '16px' }}>Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Your Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-control shadow-sm"
          rows={4}
          style={{ borderRadius: '8px' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="file" className="form-label" style={{ fontSize: '16px' }}>Upload a File</label>
        <input
          id="file"
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="form-control shadow-sm"
          style={{ borderRadius: '8px' }}
        />
        {fileName && <div className="text-secondary mt-2">Uploaded File: {fileName}</div>}
      </div>

      <button 
        type="submit" 
        className="btn w-100"
        disabled={loading}
        style={{
          backgroundColor: '#051953',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px',
          transition: 'all 0.3s ease',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#040e3c'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#051953'}
      >
        {loading ? 'Submitting...' : 'Send Message'}
      </button>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
        {/* Success Modal */}
        {success && (
  <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content text-center p-4" style={{ borderRadius: '10px' }}>
        
        {/* Success Icon */}
        <div className="d-flex justify-content-center mb-3">
          <div className="rounded-circle d-flex align-items-center justify-content-center" 
            style={{ width: '60px', height: '60px', backgroundColor: 'rgba(6, 3, 32, 0.09)', color: 'green', fontSize: '30px' }}>
            ✓
          </div>
        </div>

        <h4 className="text-success fw-bold">Success!</h4>
        <p className="text-muted">Your message has been submitted successfully.</p>
        
        {/* Close Button */}
        <button 
          className="btn btn-success w-50 mx-auto" 
          onClick={() => setSuccess(false)}
          style={{
            borderRadius: '8px',
            padding: '10px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(13, 7, 72, 0.76)',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(23, 12, 72)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(6, 10, 39)'}
        >
          OK
        </button>
      </div>
    </div>
  </div>
)}

    </form>
  </div>
</div>

    </section>
  );
}

export default ContactSection;
