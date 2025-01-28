import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import pic from "../assets/hs.png";
import Header from "./Header"; // Header component
import Footer from "./footer"; // Footer component
import { FaMapMarkerAlt, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const JobDetailsPage = () => {
  const { id } = useParams(); // Get job ID from the URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/jobs/${id}/`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!job) {
    return (
      <div className="text-center mt-5">
        <p>Loading job details...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Job Details Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="card shadow-lg border-0"
              style={{ borderRadius: "15px" }}
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
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
              <div className="card-body">
                <h2 className="card-title text-primary text-center">
                  {job.title}
                </h2>
                <p className="text-center text-muted mb-4">
                  <FaBuilding className="me-2" />
                  {job.company_name || "Company Name Not Available"}
                </p>

                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <FaMapMarkerAlt className="text-success me-2" />
                    <strong>Location:</strong> {job.location || "N/A"}
                  </div>
                  <div className="col-md-4 mb-3">
                    <FaCalendarAlt className="text-warning me-2" />
                    <strong>Posted At:</strong>{" "}
                    {new Date(job.posted_at).toLocaleDateString()}
                  </div>
                  <div className="col-md-4 mb-3">
                    <FaBuilding className="text-info me-2" />
                    <strong>Company:</strong>{" "}
                    {job.company_name || "Not Specified"}
                  </div>
                </div>

                <p className="mt-4">
                  <strong>Description:</strong>
                </p>
                <p className="text-muted">{job.description}</p>


                <p className="mt-4">
                  <strong>Qualifications And Requirements:</strong>
                </p>
                <div className="text-muted">
                   {job.minimumqualification.split('<br>').map((line, idx) => (
                   <li key={idx} style={{ listStyleType: 'disc' }}>
                     {line}
                   </li>
                    ))}
                </div>

                {/* Apply Button */}
                <Link to={`/apply/${job.id}`}>
                  <button
                    className="btn btn-primary btn-lg w-100 mt-4"
                    style={{
                      backgroundColor: "#083AA9",
                      borderColor: "#083AA9",
                      transition: "background-color 0.3s",
                    }}
                  >
                    Apply for this Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobDetailsPage;

