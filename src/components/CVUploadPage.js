// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaUser, FaEnvelope, FaPhone, FaRegCalendarAlt, FaDollarSign, FaFileUpload } from 'react-icons/fa'; // Import icons
// import Header from './Header';  // Import the Header component
// import Footer from './footer';  // Import the Footer component

// const CVUploadPage = () => {
//   const { id } = useParams(); // Get job ID from the URL
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '', // Mobile phone number
//     age: '', // Age
//     salary: '', // Expected salary
//     file: null,
//     acceptTerms: false, // For the checkbox
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({ ...formData, acceptTerms: e.target.checked });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, phone, age, salary, file, acceptTerms } = formData;
//     const jobId = id; // job ID comes from the URL

//     if (!acceptTerms) {
//       alert('Please accept the terms and confirm the provided details are correct.');
//       return;
//     }

//     // Create a new FormData object to append the data
//     const formDataToSend = new FormData();
//     formDataToSend.append('name', name);
//     formDataToSend.append('email', email);
//     formDataToSend.append('phone', phone);
//     formDataToSend.append('age', age);
//     formDataToSend.append('salary', salary);
//     formDataToSend.append('file', file); // 'file' should be the uploaded file object
//     formDataToSend.append('job', jobId);  // 'jobId' is the job ID

//     // Send the data using axios
//     axios
//       .post('http://127.0.0.1:8000/api/upload_cv/', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Set the content type as multipart/form-data
//         },
//       })
//       .then((response) => {
//         console.log(response.data); // Log the response data
//         alert('CV uploaded successfully!');
//         navigate('/'); // Redirect to home page
//       })
//       .catch((error) => {
//         console.error(error); // Log any errors that occur during the upload
//         alert('Failed to upload CV. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <Header />  {/* Including the Header component */}
//       <div className="container mt-3" style={{ background: `url('https://source.unsplash.com/1600x900/?office') no-repeat center center/cover`, backgroundSize: 'cover', padding: '50px 0', borderRadius: '10px' }}>
//         <div className="row justify-content-center">
//           <div className="col-md-8 col-lg-6">
//             <div className="card shadow-lg" style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//               <div className="card-header text-center" style={{ backgroundColor: '#071952', color: '#ffffff', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', padding: '20px' }}>
//                 <h2>Apply for Job</h2>
//               </div>
//               <div className="card-body" style={{ backgroundColor: '#f7f7f7' }}>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaUser style={{ color: '#088395', marginRight: '8px' }} /> Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       className="form-control"
//                       placeholder="Enter your full name"
//                       onChange={handleChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaEnvelope style={{ color: '#088395', marginRight: '8px' }} /> Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="form-control"
//                       placeholder="Enter your email address"
//                       onChange={handleChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="phone" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaPhone style={{ color: '#088395', marginRight: '8px' }} /> Mobile Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       className="form-control"
//                       placeholder="Enter your mobile number"
//                       onChange={handleChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="age" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaRegCalendarAlt style={{ color: '#088395', marginRight: '8px' }} /> Age
//                     </label>
//                     <input
//                       type="number"
//                       name="age"
//                       id="age"
//                       className="form-control"
//                       placeholder="Enter your age"
//                       onChange={handleChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="salary" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaDollarSign style={{ color: '#088395', marginRight: '8px' }} /> Expected Salary
//                     </label>
//                     <input
//                       type="number"
//                       name="salary"
//                       id="salary"
//                       className="form-control"
//                       placeholder="Enter your expected salary"
//                       onChange={handleChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="file" className="form-label" style={{ color: '#071952', fontSize: '1.1rem' }}>
//                       <FaFileUpload style={{ color: '#088395', marginRight: '8px' }} /> Upload CV
//                     </label>
//                     <input
//                       type="file"
//                       name="file"
//                       id="file"
//                       className="form-control"
//                       onChange={handleFileChange}
//                       required
//                       style={{ borderColor: '#088395', transition: 'all 0.3s ease' }}
//                       onFocus={(e) => e.target.style.borderColor = '#1f78c1'}
//                       onBlur={(e) => e.target.style.borderColor = '#088395'}
//                     />
//                   </div>

//                   <div className="mb-3 form-check">
//                     <input
//                       type="checkbox"
//                       name="acceptTerms"
//                       id="acceptTerms"
//                       className="form-check-input"
//                       onChange={handleCheckboxChange}
//                       required
//                     />
//                     <label htmlFor="acceptTerms" className="form-check-label" style={{ color: '#071952' }}>
//                       I accept that all provided details are correct.
//                     </label>
//                   </div>

//                   <button type="submit" className="btn" style={{ backgroundColor: '#088395', color: '#ffffff', width: '100%', padding: '12px', borderRadius: '5px', fontWeight: 'bold', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                     Upload CV
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />  {/* Including the Footer component */}
//     </div>
//   );
// };

// export default CVUploadPage;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaRegCalendarAlt, FaDollarSign, FaFileUpload } from 'react-icons/fa'; // Import icons
import { TextField, Button, Checkbox, FormControlLabel, Box, Container, Typography, Card, CardHeader, CardContent, FormHelperText } from '@mui/material';  // Import MUI components
import Header from './Header';  // Import the Header component
import Footer from './footer';  // Import the Footer component

const CVUploadPage = () => {
  const { id } = useParams(); // Get job ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Mobile phone number
    age: '', // Age
    salary: '', // Expected salary
    file: null,
    acceptTerms: false, // For the checkbox
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

    const { name, email, phone, age, salary, file, acceptTerms } = formData;
    const jobId = id; // job ID comes from the URL

    if (!acceptTerms) {
      alert('Please accept the terms and confirm the provided details are correct.');
      return;
    }

    // Create a new FormData object to append the data
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('email', email);
    formDataToSend.append('phone', phone);
    formDataToSend.append('age', age);
    formDataToSend.append('salary', salary);
    formDataToSend.append('file', file); // 'file' should be the uploaded file object
    formDataToSend.append('job', jobId);  // 'jobId' is the job ID

    // Send the data using axios
    axios
      .post('http://127.0.0.1:8000/api/upload_cv/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type as multipart/form-data
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response data
        alert('CV uploaded successfully!');
        navigate('/'); // Redirect to home page
      })
      .catch((error) => {
        console.error(error); // Log any errors that occur during the upload
        alert('Failed to upload CV. Please try again.');
      });
  };

  return (
    <div>
      <Header />  {/* Including the Header component */}
      <Container maxWidth="sm" sx={{ background: `url('https://source.unsplash.com/1600x900/?office') no-repeat center center/cover`, backgroundSize: 'cover', padding: '50px 0', borderRadius: '10px' }}>
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardHeader
            title="Apply for Job"
            sx={{ backgroundColor: '#071952', color: 'white', textAlign: 'center', padding: '20px' }}
          />
          <CardContent sx={{ backgroundColor: '#f7f7f7' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaUser style={{ marginRight: '8px' }} />
                }}
              />
              
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaEnvelope style={{ marginRight: '8px' }} />
                }}
              />

              <TextField
                label="Mobile Phone Number"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaPhone style={{ marginRight: '8px' }} />
                }}
              />

              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaRegCalendarAlt style={{ marginRight: '8px' }} />
                }}
              />

              <TextField
                label="Expected Salary"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaDollarSign style={{ marginRight: '8px' }} />
                }}
              />

              <TextField
                label="Upload CV"
                name="file"
                type="file"
                onChange={handleFileChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
                InputProps={{
                  startAdornment: <FaFileUpload style={{ marginRight: '8px' }} />
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    name="acceptTerms"
                    required
                  />
                }
                label="I accept that all provided details are correct."
                sx={{ color: '#071952' }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#088395',
                  color: 'white',
                  padding: '12px',
                  fontWeight: 'bold',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: '#1f78c1',
                  },
                }}
              >
                Upload CV
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
      <Footer />  {/* Including the Footer component */}
    </div>
  );
};

export default CVUploadPage;

