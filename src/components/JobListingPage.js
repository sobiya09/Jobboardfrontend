import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
      .get("http://127.0.0.1:8000/api/jobs/",{
     
      'Content-Type': 'multipart/form-data'},
      )
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

                  
                  {/* Dynamic Job Image */}
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





