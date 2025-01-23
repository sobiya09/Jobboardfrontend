// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const JobListingPage = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/jobs/')
//       .then((response) => setJobs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Job Listings</h1>
//       {jobs.length > 0 ? (
//         <ul>
//           {jobs.map((job) => (
//             <li key={job.id}>
//               <h2>{job.title}</h2>
//               <Link to={`/jobs/${job.id}`}>
//                 <button>View Job Details</button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No jobs available.</p>
//       )}
//     </div>
//   );
// };

// export default JobListingPage;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import jobImage from "../assets/hs.png";
// import Header from './Header';  // Import the Header component
// import Footer from './footer';  // Import the Footer component

// import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Importing Font Awesome icons

// const JobListingPage = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/jobs/")
//       .then((response) => setJobs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="container mt-5">
//       <Header/>
//       {/* Title Section */}
//       <h1 className="text-center mb-4 fw-bold" style={{ color: "#083AA9" }}>
//         Explore Your Dream Job
//       </h1>
//       <p className="text-center text-muted mb-5">
//         Find the best opportunities tailored just for you!
//       </p>

//       {jobs.length > 0 ? (
//         <div className="row">
//           {jobs.map((job) => (
//             <div className="col-md-4 mb-4" key={job.id}>
//               <div
//                 className="card shadow-sm border-0 h-100"
//                 style={{
//                   background: "white",
//                   borderRadius: "15px",
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                 }}
//               >
//                 {/* Job Image */}
//                 <img
//                   src={jobImage}
//                   className="card-img-top"
//                   alt={job.title}
//                   style={{
//                     borderTopLeftRadius: "15px",
//                     borderTopRightRadius: "15px",
//                     height: "180px", // Fixed height
//                     objectFit: "cover", // Ensures the image maintains its aspect ratio while covering the area
//                   }}
//                 />
//                 {/* Card Content */}
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold text-primary d-flex align-items-center">
//                     <FaBriefcase style={{ marginRight: "8px" }} />
//                     {job.title}
//                   </h5>
//                   <p className="card-text text-muted">
//                     {job.description?.substring(0, 100)}...
//                   </p>
//                   <div className="d-flex align-items-center mb-2">
//                     <FaMapMarkerAlt
//                       style={{ color: "#4CAF50", marginRight: "8px" }}
//                     />
//                     <span>{job.location || "Location not specified"}</span>
//                   </div>
//                   <div className="d-flex align-items-center mb-3">
//                     <FaClock style={{ color: "#FBC02D", marginRight: "8px" }} />
//                      <span>{job.type || "Type not specified"}</span>
//                 </div>

//                   <Link
//                     to={`/jobs/${job.id}`}
//                     className="btn btn-primary w-100 text-uppercase fw-bold"
//                     style={{
//                       backgroundColor: "#083AA9",
//                       borderColor: "#083AA9",
//                       transition: "background-color 0.3s",
//                     }}
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <Footer/>
//         </div>
//       ) : (
//         <div className="alert alert-warning text-center">
//           <p>No jobs available at the moment.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListingPage;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jobImage from "../assets/hs.png";
import Header from "./Header"; // Import the Header component
import Footer from "./footer"; // Import the Footer component

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa"; // Importing Font Awesome icons

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/jobs/")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      {/* Hero Section */}
        <h1 className="text-center mb-4 fw-bold" style={{ color: "#083AA9" }}>
   Explore Your Dream Job
       </h1>
       <p className="text-center text-muted mb-5">
       Browse through our curated list of jobs and find your perfect match.

       <br/>
        Find the best opportunities tailored just for you!
        </p>

      <div className="container mt-5">
        {/* Title Section */}
        
       

        {jobs.length > 0 ? (
          <div className="row">
            {jobs.map((job) => (
              <div className="col-md-4 mb-4" key={job.id}>
                <div
                  className="card shadow-lg border-0 h-100"
                  style={{
                    background: "white",
                    borderRadius: "15px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add("shadow-lg", "scale-up")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove("shadow-lg", "scale-up")
                  }
                >
                  {/* Job Image */}
                  <img
                    src={jobImage}
                    className="card-img-top"
                    alt={job.title}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  {/* Card Content */}
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary d-flex align-items-center">
                      <FaBriefcase style={{ marginRight: "8px" }} />
                      {job.title}
                    </h5>
                    <p className="card-text text-muted">
                      {job.description?.substring(0, 100)}...
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt
                        style={{ color: "#4CAF50", marginRight: "8px" }}
                      />
                      <span>{job.location || "Location not specified"}</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaClock
                        style={{ color: "#FBC02D", marginRight: "8px" }}
                      />
                      <span>{job.type || "Type not specified"}</span>
                    </div>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-primary w-100 text-uppercase fw-bold"
                      style={{
                        backgroundColor: "#083AA9",
                        borderColor: "#083AA9",
                        transition: "background-color 0.3s",
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-warning text-center">
            <p>No jobs available at the moment.</p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default JobListingPage;





