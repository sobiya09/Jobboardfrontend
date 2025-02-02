import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaRegCalendarAlt, FaDollarSign, FaFileUpload } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const CVUploadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    salary: '',
    file: null,
    acceptTerms: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, acceptTerms: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert('Please accept the terms and confirm the provided details are correct.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('salary', formData.salary);
    formDataToSend.append('file', formData.file);
    formDataToSend.append('job', id);

    axios.post('http://127.0.0.1:8000/api/upload_cv/', formDataToSend, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(() => {
        alert('Thank you for applying! 🎉 Our recruitment team will review your CV and get back to you soon.CV uploaded successfully!');
        navigate('/');
      })
      .catch(() => {
        alert('Failed to upload CV. Please try again.');
      });
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Header />
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card shadow-lg p-4" style={{ width: '500px', borderRadius: '12px' }}>
          {/* Card Header with Gradient */}
          <div className="card-header text-white text-center" style={{ 
            background: 'linear-gradient(135deg, #071952, #0a2a5c)', 
            borderRadius: '10px 10px 0 0', 
            padding: '15px' 
          }}>
            <h3>Apply for Job</h3>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label"><FaUser className="me-2" /> Full Name</label>
                <input type="text" name="name" className="form-control rounded-3 shadow-sm" value={formData.name} onChange={handleChange} required />
              </div>

              {/* Email Address */}
              <div className="mb-3">
                <label className="form-label"><FaEnvelope className="me-2" /> Email Address</label>
                <input type="email" name="email" className="form-control rounded-3 shadow-sm" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Mobile Phone Number */}
              <div className="mb-3">
                <label className="form-label"><FaPhone className="me-2" /> Mobile Phone Number</label>
                <input type="text" name="phone" className="form-control rounded-3 shadow-sm" value={formData.phone} onChange={handleChange} required />
              </div>

              {/* Age */}
              <div className="mb-3">
                <label className="form-label"><FaRegCalendarAlt className="me-2" /> Age</label>
                <input type="number" name="age" className="form-control rounded-3 shadow-sm" value={formData.age} onChange={handleChange} required />
              </div>

              {/* Expected Salary */}
              <div className="mb-3">
                <label className="form-label"><FaDollarSign className="me-2" /> Expected Salary(Rs.)</label>
                <input type="number" name="salary" className="form-control rounded-3 shadow-sm" value={formData.salary} onChange={handleChange} required />
              </div>

              {/* Upload CV */}
              <div className="mb-3">
                <label className="form-label"><FaFileUpload className="me-2" /> Upload CV</label>
                <input type="file" name="file" className="form-control rounded-3 shadow-sm" onChange={handleFileChange} required />
              </div>

              {/* Terms Checkbox */}
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" checked={formData.acceptTerms} onChange={handleCheckboxChange} required />
                <label className="form-check-label" htmlFor="terms">I accept that all provided details are correct.</label>
              </div>

              {/* Submit Button with Dark Blue Styling */}
              <button 
                type="submit" 
                className="btn w-100"
                style={{
                  backgroundColor: '#071952',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '12px',
                  borderRadius: '6px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: '0.3s',
                  border: 'none'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0a2a5c'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#071952'}
              >
                Upload CV
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CVUploadPage;

