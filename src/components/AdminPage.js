import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import jobImage from "../assets/Admin.jpg";
import '../css/AdminDashboard.css';

function AdminPage({ token }) {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    minimumqualification:'',
    location: '',
    company_name: '',
    type: '',
    image:'null',

  });
  const [editJob, setEditJob] = useState(null);
  const [cvs, setCVs] = useState([]);
  const [view, setView] = useState('add');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    fetchMessages();
    fetchCVs();
  }, []);

  const fetchJobs = () => {
    axios
      .get('http://127.0.0.1:8000/api/jobs/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setJobs(response.data))
      .catch((error) => console.error('Failed to fetch jobs', error));
  };

  const fetchMessages = () => {
    axios
      .get("http://127.0.0.1:8000/api/requests/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Failed to fetch messages", error));
  };

  const fetchCVs = () => {
    axios
      .get("http://127.0.0.1:8000/api/cvs/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("CV API response:", response.data); // Debugging
        setCVs(response.data);
      })
      .catch((error) => console.error("Failed to fetch CVs", error));
  };
  
  const logout = () => {
    // Clear JWT tokens from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    // Redirect to login page
    navigate('/login'); // Assuming you have a login route
  };

  const handleAddJob = () => {
    if (!newJob.title || !newJob.description ||!newJob.minimumqualification || !newJob.location || !newJob.company_name || !newJob.type || !newJob.image) {
      alert('Please fill all fields.');
      return;
    }

    axios
      .post('http://127.0.0.1:8000/api/jobs/', newJob, {
        
        headers: { Authorization: `Bearer ${token}` ,
      'Content-Type': 'multipart/form-data'},
      })
      .then(() => {
        alert('Job added successfully!');
        setNewJob({ title: '', description: '',minimumqualification:'',location: '', company_name: '', type: ''});
        fetchJobs();
      })
      .catch((error) => console.error('Failed to add job', error));
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      axios
        .delete(`http://127.0.0.1:8000/api/jobs/${jobId}/`, {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'multipart/form-data'},
          
        )
        .then(() => {
          alert('Job deleted successfully!');
          fetchJobs();
        })
        .catch((error) => console.error('Failed to delete job', error));
    }
  };

  const handleUpdateJob = () => {
    
    
    if (!editJob.title || !editJob.description ||!editJob.minimumqualification || !editJob.location || !editJob.company_name || !editJob.type ) {
      alert('Please fill all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', editJob.title);
    formData.append('description', editJob.description);
    formData.append('minimumqualification', editJob.minimumqualification);
    formData.append('location', editJob.location);
    formData.append('company_name', editJob.company_name);
    formData.append('type', editJob.type);
  
    // Only append the image if it's a new file
    if (editJob.image instanceof File) {
      formData.append('image', editJob.image);
    }
    axios
      .put(`http://127.0.0.1:8000/api/jobs/${editJob.id}/`, formData, {
        headers: { Authorization: `Bearer ${token}` ,
        'Content-Type': 'multipart/form-data',
      }
  })
      .then(() => {
        alert('Job updated successfully!');
        setEditJob();
        fetchJobs();
      })
      .catch((error) => console.error('Failed to update job', error));
  };

  const renderAddJobSection = () => (
<div>
  <h2 className="text-center mb-2">Add a New Job</h2>
  <div className="row justify-content-center">
    <div className="col-md-6">
      {['title', 'description','minimumqualification', 'location', 'company_name'].map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label text-muted">{field.replace('_', ' ').toUpperCase()}</label>
          <input
            type="text"
            className="form-control custom-input"
            placeholder={`Enter ${field}`}
            value={newJob[field]}
            onChange={(e) => setNewJob({ ...newJob, [field]: e.target.value })}
          />
        </div>
      ))}
      <div className="mb-3">
        <label className="form-label text-muted">Job Type</label>
        <select
          className="form-select custom-input"
          value={newJob.type}
          onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
        >
          <option value="">Select job type</option>
          {['Full-time', 'Part-time', 'Internship', 'Contract', 'Temporary'].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>



      <div className="mb-3">
          <label className="form-label text-muted">Upload Image</label>
          <input
    type="file"
    className="form-control"
    onChange={(e) =>
      setNewJob({ ...newJob, image: e.target.files[0] })
    }
  />
        </div>  
    
      
      <div className="row justify-content-center">
       <div className="col-md-6 d-flex justify-content-center">
        <button className="btn btn-primary w-100 py-3 custom-btn" onClick={handleAddJob}>
         Add Job
        </button>
  </div>
</div>
    </div>
  </div>
</div>
  );

  const renderMessagesSection = () => (
    <div>
      <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#071952' }}>Contact Messages</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" style={{ backgroundColor: '#f4f4f4' }}>
          <thead style={{ backgroundColor: '#088395', color: '#fff' }}>
            <tr>
              <th>Request Type</th>
              <th>User Type</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Description</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <tr key={message.id}>
                  <td>{message.request_type}</td>
                  <td>{message.entity_type}</td>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.phone}</td>
                  <td>{message.address}</td>
                  <td>{message.description}</td>
                  <td>{new Date(message.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No messages available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCVsSection = () => (
    <div>
      <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#071952' }}>Uploaded CV Details</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" style={{ backgroundColor: '#f4f4f4' }}>
          <thead style={{ backgroundColor: '#088395', color: '#fff' }}>
            <tr>
              {/* <th>#</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {cvs.length > 0 ? (
              cvs.map((cv, index) => (
                <tr key={cv.id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{cv.name}</td>
                  <td>{cv.email}</td>
                  <td>{cv.phone || "N/A"}</td>
                  <td>{cv.age || "N/A"}</td>
                  <td>{cv.salary ? `Rs.${cv.salary}` : "N/A"}</td>
                  <td>{cv.job_title || "N/A"}</td>
                  <td>{cv.company_name || "N/A"}</td>
                  <td>{new Date(cv.submitted_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No CVs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderViewJobsSection = () => (
    <div>
      <h2 className="text-center mb-2">View All Jobs</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" style={{ backgroundColor: '#f4f4f4' }}>
          <thead style={{ backgroundColor: '#088395', color: '#fff' }}>
            <tr>
              {/* <th>#</th> */}
              <th>Job Title</th>
              <th>Description</th>
              <th>Minimum qualification</th>
              <th>Location</th>
              <th>Company Name</th>
              <th>Job Type</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <tr key={job.id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>{job.minimumqualification}</td> 
                  <td>{job.location}</td>
                  <td>{job.company_name}</td>
                  <td>{job.type}</td>
                  {/* <td>{job.image}</td> */}
                  <td>
                  <img
                    src={
                      job.image
                    }
                    className="card-img-top"
                    alt={job.image}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No jobs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );


const renderUpdateJobsSection = () => (
  <div>
    <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#071952' }}>
      Update Jobs
    </h2>
    <div className="table-responsive">
      <table className="table table-striped table-bordered" style={{ backgroundColor: '#f4f4f4' }}>
        <thead style={{ backgroundColor: '#088395', color: '#fff' }}>
          <tr>
            <th>Job Title</th>
            <th>Description</th>
            <th>Qualification</th>
            <th>Location</th>
            <th>Company Name</th>
            <th>Job Type</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <tr key={job.id} style={{ transition: 'all 0.3s ease' }} className="hover-row">
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {job.minimumqualification.split('<br>').map((line, idx) => (
              <li key={idx} style={{ listStyleType: 'disc' }}>
                {line}
              </li>
            ))}
          </ul>
        </td>

                <td>{job.location}</td>
                <td>{job.company_name}</td>
                <td>{job.type}</td>
                <td><img
                    src={
                      job.image
                    }
                    className="card-img-top"
                    alt={job.image}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  /></td>
                <td>
                <div className="d-flex">
                  <button
                    className="btn btn-primary btn-sm me-2 px-3 py-2 text-white"
                  onClick={() => setEditJob(job)}
                  >
                 <i className="fas fa-edit me-1"></i> Edit
               </button>
               <button
                    className="btn btn-danger btn-sm px-3 py-2 text-white"
                    onClick={() => handleDeleteJob(job.id)}
                >
      <i className="fas fa-trash me-1"></i> Delete
    </button>
  </div>
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No jobs available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

  const renderEditJobModal = () =>
    editJob && (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button type="button" className="btn-close" onClick={() => setEditJob(null)}></button>
            </div>
            <div className="modal-body">
              {['title', 'description', 'minimumqualification','location', 'company_name'].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="form-label">{field.replace('_', ' ').toUpperCase()}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editJob[field]}
                    onChange={(e) => setEditJob({ ...editJob, [field]: e.target.value })}
                  />
                </div>
              ))}
              <label className="form-label">Job Type</label>
              <select
                className="form-select mb-3"
                value={editJob.type}
                onChange={(e) => setEditJob({ ...editJob, type: e.target.value })}
              >
                {['Full-time', 'Part-time', 'Internship', 'Contract', 'Temporary'].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              
              <label className="form-label">Update Image</label>
  <input
    type="file"
    className="form-control"
    onChange={(e) =>
      setEditJob({ ...editJob, image: e.target.files[0] })
    }
  />

            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleUpdateJob}>
                Save Changes
              </button>
              <button className="btn btn-secondary" onClick={() => setEditJob(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
<div className="d-flex">
  {/* Sidebar */}
  <div
    className="bg-custom text-white p-4 position-fixed"
    style={{ width: '250px', height: '100vh', top: '0', left: '0' }}
  >
    <div className="text-center mb-4">
      {/* Admin Profile Picture */}
      <img
        src={jobImage}
        alt="Admin Profile"
        className="rounded-circle mb-2"
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <h5>Admin</h5>
    </div>
    <ul className="nav flex-column">
      <li className="nav-item mb-4">
        <button className="nav-link text-white btn btn-link px-4 py-2" onClick={() => setView('add')}>
          Add Jobs
        </button>
      </li>
      <li className="nav-item mb-4">
        <button className="nav-link text-white btn btn-link px-4 py-2" onClick={() => setView('view')}>
          View Jobs
        </button>
      </li>
      <li className="nav-item mb-4">
        <button className="nav-link text-white btn btn-link px-4 py-2" onClick={() => setView('update')}>
          Update Jobs
        </button>
      </li>
      <li className="nav-item mb-4">
        <button className="nav-link text-white btn btn-link px-4 py-2" onClick={() => setView('messages')}>
          View Messages
        </button>
      </li>
      <li className="nav-item mb-4">
        <button className="nav-link text-white btn btn-link px-4 py-2" onClick={() => setView('cvs')}>
          CV Details
        </button>
      </li>
    </ul>
    <div className="mt-4">
      <button className="btn btn-danger w-100 py-2" onClick={logout}>
        Logout
      </button>
    </div>
  </div>

  {/* Main Content */}
  <div
    className="flex-grow-1 p-4"
    style={{
      marginLeft: '250px', // Adjust content for sidebar width
      backgroundColor: '#f2f2f2',
      backgroundSize: 'cover', // Make sure the image covers the entire background
    backgroundPosition: 'center', // Center the background image
    
    }}
  >
    <h1 className="mb-3">Admin Dashboard</h1>
    {view === 'add' && renderAddJobSection()}
    {view === 'view' && renderViewJobsSection()}
    {view === 'update' && renderUpdateJobsSection()}
    {view === 'messages' && renderMessagesSection()}
    {view === 'cvs' && renderCVsSection()}
    {renderEditJobModal()}
  </div>
</div>

  );
}

export default AdminPage;





